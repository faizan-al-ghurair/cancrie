import { binanceList } from "./binanceList";
import { mock1 } from "./mock1";

export const parser = (apiData = {}) => {
  const { status, data } = apiData;

  if (data && data.length > 0) {
    const dateString = status.timestamp;
    const date = new Date(dateString);

    const formattedDateTime = `${String(date.getDate()).padStart(
      2,
      "0"
    )}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${date.getFullYear()}_${String(date.getUTCHours()).padStart(
      2,
      "0"
    )}-${String(date.getUTCMinutes()).padStart(2, "0")}-${String(
      date.getUTCSeconds()
    ).padStart(2, "0")}`;
    const dateFormatted = formattedDateTime.split("_")[0];
    const parsedData = data?.map((item, id) => {
      return {
        name: item.name,
        dateTime: {
          [dateFormatted]: {
            [formattedDateTime]: {
              last_updated: item.last_updated,
              market_cap: item.quote.USD.market_cap,
              price: item.quote.USD.price,
              volume_24h: item.quote.USD?.volume_24h,
            },
          },
        },
      };
    });
    return parsedData;
  }
};

export const getDateAndTimeCustom = (dateString) => {
  const year = dateString.substr(0, 4);
  const month = dateString.substr(5, 2);
  const day = dateString.substr(8, 2);
  const hour = dateString.substr(11, 2);
  const min = dateString.substr(14, 2);
  const sec = dateString.substr(20, 2);
  const formattedDateTime = `${day}-${month}-${year}_${hour}-${min}-${sec}`;
  return formattedDateTime; //  11-11-2024_11-55-00
};

export const getDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

//! this converts the api data into acceptable data for updateInDBParser()
export const apiDataParserToSchema = (apiData) => {
  const newData = apiData?.data?.map((item) => {
    const formattedDate = getDate(item.last_updated);
    const last_updated = getDateAndTimeCustom(item.last_updated);
    if (binanceList.includes(item.symbol))
      return {
        name: item.name,
        symbol: item.symbol,
        dateTime: {
          [formattedDate]: {
            [last_updated]: {
              last_updated: item.last_updated,
              market_cap: item.quote.USD.market_cap,
              price: item.quote.USD.price,
              volume_24h: item.quote.USD?.volume_24h,
              cmc_rank: item.cmc_rank,
            },
          },
        },
      };
  });
  return newData.filter((item) => item);
};

//! this accepts the parsed data and appends as one
export const updateInDBParser = (newData, dataBaseOldData) => {
  const unionDataWithOutIntersection = newData.filter((newItem) => {
    let found = 0;
    dataBaseOldData?.map((oldItem) => {
      if (oldItem.name === newItem.name) {
        found = 1;
        return newItem;
      }
    });
    if (found === 0) {
      return true;
    }
  });
  const unionItems = [...dataBaseOldData, ...unionDataWithOutIntersection]; // all of old + unique of

  //   now find the intersection
  const dataIntersectionNew = newData.filter((newItem) => {
    let found = 0;

    dataBaseOldData?.map((oldItem) => {
      if (oldItem.name === newItem.name) {
        found = 1;
        return newItem;
      }
    });
    if (found === 1) {
      return true;
    }
  });

  // this will update the inner values

  let updatedItemArrayOverLap = []; // stroe all updated value in this array
  let updatedItemNotOverlapArray = []; // stroe all updated value in this array
  const updatedData = unionItems?.map((itemUni) => {
    let coinFound = 0;
    let mergeObj = itemUni;
    dataIntersectionNew?.map((itemInter) => {
      let updatedItem = "";
      if (itemUni.name === itemInter.name) {
        coinFound = 1;
        const timeStrampToAppendNewItem =
          itemInter.dateTime[Object.keys(itemInter.dateTime)[0]];
        const dateOfNewItem = Object.keys(itemInter.dateTime)[0];
        const dateFound = itemUni.dateTime[dateOfNewItem];

        if (dateFound) {
          updatedItem = {
            ...itemUni,
            dateTime: {
              ...itemUni.dateTime,
              [dateOfNewItem]: {
                ...itemUni.dateTime[dateOfNewItem],
                ...timeStrampToAppendNewItem,
              },
            },
          };
        } else {
          updatedItem = {
            ...itemUni,
            dateTime: {
              ...itemUni.dateTime,
              [dateOfNewItem]: { ...timeStrampToAppendNewItem },
            },
          };
        }
        if (updatedItem) {
          updatedItemArrayOverLap.push(updatedItem);
        }
      }
    });
    if (coinFound === 0) {
      updatedItemNotOverlapArray.push(itemUni);
    }
  });

  return [...updatedItemArrayOverLap, ...updatedItemNotOverlapArray];
};
