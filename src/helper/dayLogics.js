export const get24HrsVol = (item) => {
  const dateTOmap = Object.keys(item.dateTime);
  const lastDate = dateTOmap[dateTOmap.length - 1];
  const arrayOfTime = Object.keys(
    item.dateTime[dateTOmap[dateTOmap?.length - 1]]
  );
  const firstVolValue = item.dateTime[lastDate][arrayOfTime[0]].volume_24h;
  const newVolValue =
    item.dateTime[lastDate][arrayOfTime[arrayOfTime.length - 1]].volume_24h;
  const percentageVolChange = (
    ((newVolValue - firstVolValue) / firstVolValue) *
    100
  ).toFixed(2);

  return percentageVolChange;
};

export const getDay1Vol = (item) => {
  const dateTOmap = item.dateTime; // {11-11-2024: {…}, 12-11-2024: {…}, 13-11-2024: {…},
  const currentDate = Object.keys(item.dateTime).reverse()[0]; // 18-11-2024
  if (dateTOmap[currentDate]) {
    const currentDayLastTime = Object.keys(dateTOmap[currentDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //18-11-2024_10-30-00
    const currentDayStartTime = Object.keys(dateTOmap[currentDate])[0]; //18-11-2024_09-00-00
    const volAtCurrentDayStartTime =
      dateTOmap[currentDate][currentDayLastTime].volume_24h; //200
    const volAtCurrentDayLastTime =
      dateTOmap[currentDate][currentDayStartTime].volume_24h; //10

    const percentageVolChange = (
      ((volAtCurrentDayStartTime - volAtCurrentDayLastTime) /
        volAtCurrentDayLastTime) *
      100
    ).toFixed(2);
    return percentageVolChange;
  }
  return "-";
};

export const getDayVol = (item, numb = 0) => {
  const dateTOmap = item.dateTime; // {11-11-2024: {…}, 12-11-2024: {…}, 13-11-2024: {…},
  const currentDate = Object.keys(item.dateTime).reverse()[0]; // 18-11-2024
  const lastDate = Object.keys(item.dateTime).reverse()[numb]; //17-11-2024
  if (dateTOmap[currentDate] && dateTOmap[lastDate]) {
    const currentDayLastTime = Object.keys(dateTOmap[currentDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //18-11-2024_10-30-00

    const previousDayLastTime = Object.keys(dateTOmap[lastDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //17-11-2024_10-30-00

    const volAtCurrentDayLastTime =
      dateTOmap[currentDate][currentDayLastTime]?.volume_24h; //200
    const volAtPreviousDayLastTime =
      dateTOmap[lastDate][previousDayLastTime]?.volume_24h; //10

    const percentageVolChange = (
      ((volAtCurrentDayLastTime - volAtPreviousDayLastTime) /
        volAtPreviousDayLastTime) *
      100
    ).toFixed(2);

    return percentageVolChange;
  }
  return "-";
};

// ____________PRICE_____________
export const getDayPrice = (item, numb = 0) => {
  const dateTOmap = item.dateTime; // {11-11-2024: {…}, 12-11-2024: {…}, 13-11-2024: {…},
  const currentDate = Object.keys(item.dateTime).reverse()[0]; // 18-11-2024
  const lastDate = Object.keys(item.dateTime).reverse()[numb]; //17-11-2024
  if ((numb === 1)) {
    console.log("item", item);
    console.log("lastDate", lastDate);
  }
  if (dateTOmap[currentDate] && dateTOmap[lastDate]) {
    const currentDayLastTime = Object.keys(dateTOmap[currentDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //18-11-2024_10-30-00

    const previousDayLastTime = Object.keys(dateTOmap[lastDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //17-11-2024_10-30-00

    const volAtCurrentDayLastTime =
      dateTOmap[currentDate][currentDayLastTime]?.volume_24h; //200
    const volAtPreviousDayLastTime =
      dateTOmap[lastDate][previousDayLastTime]?.volume_24h; //10

    const percentageVolChange = (
      ((volAtCurrentDayLastTime - volAtPreviousDayLastTime) /
        volAtPreviousDayLastTime) *
      100
    ).toFixed(2);

    return percentageVolChange;
  }
  return "-";
};

export const getDay1Price = (item) => {
  const dateTOmap = item.dateTime; // {11-11-2024: {…}, 12-11-2024: {…}, 13-11-2024: {…},
  const currentDate = Object.keys(item.dateTime).reverse()[0]; // 18-11-2024
  if (dateTOmap[currentDate]) {
    const currentDayLastTime = Object.keys(dateTOmap[currentDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //18-11-2024_10-30-00
    const currentDayStartTime = Object.keys(dateTOmap[currentDate])[0]; //18-11-2024_09-00-00
    const volAtCurrentDayStartTime =
      dateTOmap[currentDate][currentDayLastTime].price; //200
    const volAtCurrentDayLastTime =
      dateTOmap[currentDate][currentDayStartTime].price; //10
    const percentagePriceChange = (
      ((volAtCurrentDayStartTime - volAtCurrentDayLastTime) /
        volAtCurrentDayLastTime) *
      100
    ).toFixed(2);
    return percentagePriceChange;
  }
  return "-";
};

export const getDay1Rank = (item, id) => {
  const dateTOmap = item.dateTime; // {11-11-2024: {…}, 12-11-2024: {…}, 13-11-2024: {…},
  const currentDate = Object.keys(item.dateTime).reverse()[id]; // 18-11-2024

  if (dateTOmap[currentDate]) {
    const currentDayLastTime = Object.keys(dateTOmap[currentDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //18-11-2024_10-30-00
    const volAtCurrentDayStartTime =
      dateTOmap[currentDate][currentDayLastTime].cmc_rank; //200

    // console.log("--->", volAtCurrentDayStartTime);

    return volAtCurrentDayStartTime;
  }
  return "-";
};

export const getDayRank = (item, numb = 0) => {
  const dateTOmap = item.dateTime; // {11-11-2024: {…}, 12-11-2024: {…}, 13-11-2024: {…},
  // console.log("--->", item);

  const currentDate = Object.keys(item.dateTime).reverse()[0]; // 18-11-2024
  const lastDate = Object.keys(item.dateTime).reverse()[numb]; //17-11-2024
  // console.log("currentDate", currentDate);

  if (dateTOmap[currentDate] && dateTOmap[lastDate]) {
    const currentDayLastTime = Object.keys(dateTOmap[currentDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //18-11-2024_10-30-00

    const previousDayLastTime = Object.keys(dateTOmap[lastDate])[
      Object.keys(dateTOmap[currentDate]).length - 1
    ]; //17-11-2024_10-30-00

    const volAtCurrentDayLastTime =
      dateTOmap[currentDate][currentDayLastTime]?.cmc_rank; //200
    const volAtPreviousDayLastTime =
      dateTOmap[lastDate][previousDayLastTime]?.cmc_rank; //10

    // console.log("volAtPreviousDayLastTime", volAtPreviousDayLastTime);
    // console.log("--->", volAtCurrentDayLastTime);
    // const percentageVolChange = (
    //   ((volAtCurrentDayLastTime - volAtPreviousDayLastTime) /
    //     volAtPreviousDayLastTime) *
    //   100
    // ).toFixed(2);

    return volAtCurrentDayLastTime;
  }
  return "-";
};
