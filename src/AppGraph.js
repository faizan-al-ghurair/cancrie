import "./App.css";
import { useEffect, useState } from "react";
import { apiDataParserToSchema, updateInDBParser } from "./helper/parser";
import { mock1, newMock } from "./helper/mock1";
import { dataMock } from "./helper/mock14Nov1_55";
import { correctSchemaOfDB } from "./helper/correctSchemaOfDB";
import { TanStackTable } from "./Components/TanStackTable";
import { mockRealData } from "./helper/mockRealData";
import { DataGrid } from "@mui/x-data-grid";
import { data_new } from "./helper/mocknew";
import Plot from "react-plotly.js";

export const AppGraph = () => {
  // this function will filter out the coins not listed in binance
  const [cryptoData, setCryptoData] = useState(correctSchemaOfDB);
  const [error, setError] = useState(null);
  const [fetchNow, setfetchNow] = useState(false);
  const [dataSetRow, setterDataSetRow] = useState();
  const [dataSetCol, setterDataSetCol] = useState();

  const formatData = (data) => {
    return data?.map((item, id) => {
      const dateTOmap = Object.keys(item?.dateTime).reverse();
      const dataTopMap0 = dateTOmap[0] || "";
      const dataTopMap1 = dateTOmap[1] || "";
      const dataTopMap2 = dateTOmap[2] || "";
      const dataTopMap3 = dateTOmap[3] || "";
      const dataTopMap4 = dateTOmap[4] || "";
      const dataTopMap5 = dateTOmap[5] || "";
      const dataTopMap6 = dateTOmap[6] || "";
      const dataTopMap7 = dateTOmap[7] || "";

      return {
        id: item.name,
        oneDay: "get24HrsVol(item)",
        name: item.name,
        [dataTopMap0]: "getDay1Vol(item, 0)",
        [dataTopMap1]: "getDayVol(item, 1)",
        [dataTopMap2]: "getDayVol(item, 2)",
        [dataTopMap3]: "getDayVol(item, 3)",
        [dataTopMap4]: "getDayVol(item, 4)",
        [dataTopMap5]: "getDayVol(item, 5)",
        [dataTopMap6]: "getDayVol(item, 6)",
        [dataTopMap7]: "getDayVol(item, 7)",
        ["price-" + dataTopMap0]: "getDay1Price(item, 0)",
        ["price-" + dataTopMap1]: "getDayPrice(item, 1)",
        ["price-" + dataTopMap2]: "getDayPrice(item, 2)",
        ["price-" + dataTopMap3]: "getDayPrice(item, 3)",
        ["price-" + dataTopMap4]: "getDayPrice(item, 4)",
        ["price-" + dataTopMap5]: "getDayPrice(item, 5)",
        ["price-" + dataTopMap6]: "getDayPrice(item, 6)",
        ["price-" + dataTopMap7]: "getDayPrice(item, 7)",
        ["Rank-" + dateTOmap[0]]: "getDay1Rank(item, 0)",
        ["Rank-" + dateTOmap[1]]: "getDayRank(item, 1)",
        ["Rank-" + dateTOmap[2]]: "getDayRank(item, 2)",
        ["Rank-" + dateTOmap[3]]: "getDayRank(item, 3)",
        ["Rank-" + dateTOmap[4]]: "getDayRank(item, 4)",
        ["Rank-" + dateTOmap[5]]: "getDayRank(item, 5)",
        ["Rank-" + dateTOmap[6]]: "getDayRank(item, 6)",
        ["Rank-" + dateTOmap[7]]: "getDayRank(item, 7)",
      };
    });
  };

  useEffect(() => {
    if (!dataSetRow) {
      const dates = data_new[0].history;
      const columns = [
        { field: "col0", headerName: "Sr.no", width: 60 },
        { field: "col1", headerName: "Name", width: 70 },
        { field: "col2", headerName: "Vol", width: 130 },
        { field: "col3", headerName: "Price", width: 70 },
        {
          field: "col4",
          headerName: "Vol - " + dates[0]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col5",
          headerName: "Vol - " + dates[1]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col6",
          headerName: "Vol - " + dates[2]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col7",
          headerName: "Vol - " + dates[3]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col8",
          headerName: "Vol - " + dates[4]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col9",
          headerName: "Vol - " + dates[5]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col10",
          headerName: "Vol - " + dates[6]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col11",
          headerName: "Price - " + dates[0]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col12",
          headerName: "Price - " + dates[1]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col13",
          headerName: "Price - " + dates[2]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col14",
          headerName: "Price - " + dates[3]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col15",
          headerName: "Price - " + dates[4]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col16",
          headerName: "Price - " + dates[5]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col17",
          headerName: "Price - " + dates[6]?._id.substr(8) || "",
          width: 80,
        },
        {
          field: "col18",
          headerName: "Rank - " + dates[0]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col19",
          headerName: "Rank - " + dates[1]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col20",
          headerName: "Rank - " + dates[2]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col21",
          headerName: "Rank - " + dates[3]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col22",
          headerName: "Rank - " + dates[4]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col23",
          headerName: "Rank - " + dates[5]?._id.substr(8) || "",
          width: 70,
        },
        {
          field: "col24",
          headerName: "Rank - " + dates[6]?._id.substr(8) || "",
          width: 70,
        },
      ];
      const rows = data_new.map((item, id) => {
        if (item?.history?.length) {
          return {
            id: id,
            col0: id + 1,
            col1: item.symbol,
            col2: (+item?.volume_24h)?.toFixed(2),
            col3: item?.price?.toFixed(2) || "- -",
            col4:
              (+item.history[0]?.volume_24h < +item?.volume_24h
                ? (+item.history[0]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[0]?.volume_24h
              ).toFixed(2) || "- -",
            col5:
              (+item.history[1]?.volume_24h < +item?.volume_24h
                ? (+item.history[1]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[1]?.volume_24h
              ).toFixed(2) || "- -",
            col6:
              (+item.history[2]?.volume_24h < +item?.volume_24h
                ? (+item.history[2]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[2]?.volume_24h
              ).toFixed(2) || "- -",
            col7:
              (+item.history[3]?.volume_24h < +item?.volume_24h
                ? (+item.history[3]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[3]?.volume_24h
              ).toFixed(2) || "- -",
            col8:
              (+item.history[4]?.volume_24h < +item?.volume_24h
                ? (+item.history[4]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[4]?.volume_24h
              ).toFixed(2) || "- -",
            col9:
              (+item.history[5]?.volume_24h < +item?.volume_24h
                ? (+item.history[5]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[5]?.volume_24h
              ).toFixed(2) || "- -",
            col10:
              (+item.history[6]?.volume_24h < +item?.volume_24h
                ? (+item.history[6]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[6]?.volume_24h
              ).toFixed(2) || "- -",
            col11:
              (+item.history[0]?.price < +item?.price
                ? (+item.history[0]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[0]?.price
              ).toFixed(2) || "- -",
            col12:
              (+item.history[1]?.price < +item?.price
                ? (+item.history[1]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[1]?.price
              ).toFixed(2) || "- -",
            col13:
              (+item.history[2]?.price < +item?.price
                ? (+item.history[2]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[2]?.price
              ).toFixed(2) || "- -",
            col14:
              (+item.history[3]?.price < +item?.price
                ? (+item.history[3]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[3]?.price
              ).toFixed(2) || "- -",
            col15:
              (+item.history[4]?.price < +item?.price
                ? (+item.history[4]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[4]?.price
              ).toFixed(2) || "- -",
            col16:
              (+item.history[5]?.price < +item?.price
                ? (+item.history[5]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[5]?.price
              ).toFixed(2) || "- -",
            col17:
              (+item.history[6]?.price < +item?.price
                ? (+item.history[6]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[6]?.price
              ).toFixed(2) || "- -",
            col18:
              (+item.history[0]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[0]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[0]?.cmc_rank
              ).toFixed(2) || "- -",
            col19:
              (+item.history[1]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[1]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[1]?.cmc_rank
              ).toFixed(2) || "- -",
            col20:
              (+item.history[2]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[2]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[2]?.cmc_rank
              ).toFixed(2) || "- -",
            col21:
              (+item.history[3]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[3]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[3]?.cmc_rank
              ).toFixed(2) || "- -",
            col22:
              (+item.history[4]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[4]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[4]?.cmc_rank
              ).toFixed(2) || "- -",
            col23:
              (+item.history[5]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[5]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[5]?.cmc_rank
              ).toFixed(2) || "- -",
            col24:
              (+item.history[6]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[6]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[6]?.cmc_rank
              ).toFixed(2) || "- -",
          };
        } else {
          return {
            id: id,
            col0: "- -",
            col1: "- -",
            col2: "- -",
            col3: "- -",
            col4: "- -",
            col5: "- -",
            col6: "- -",
            col7: "- -",
            col8: "- -",
            col9: "- -",
            col10: "- -",
            col11: "- -",
            col12: "- -",
            col13: "- -",
            col14: "- -",
            col15: "- -",
            col16: "- -",
            col17: "- -",
            col18: "- -",
            col19: "- -",
            col20: "- -",
            col21: "- -",
            col22: "- -",
            col23: "- -",
            col24: "- -",
          };
        }
      });
      const filteredRows = data_new.map((item, id) => {
        return {
          id: id,
          col1: item.price,
          col2: item.market_cap,
          col3: item.volume_24h,
        };
      });
      console.log("filteredRows", filteredRows);
      setterDataSetRow(rows);
      setterDataSetCol(columns);
    }
  }, []);

  const fetchCryptoData = async () => {
    try {
      console.log("coming here");

      // const response = await fetch("http://13.51.173.4:5000/get-coins", {});
      const response = await fetch("http://localhost:5000/get-coins", {});
      console.log("response", response);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      // const data = await response.json();
      // setCryptoData(data);
      // addDataInDB(data);
    } catch (err) {
      console.error("Failed to fetch crypto data:", err.message);
      // setError(err.message);
    }
  };
  useEffect(() => {
    // fetchCryptoData();
  }, []);

  return (
    <div className="" style={{ width: "100%", height: "100%" }}>
      <h3>Data Table</h3>
      {[{}, {}].map(() => {
        return (
          <div style={{ display: "flex" }}>
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5], // X-axis values
                  y: [10, 15, 13, 17, 19], // Y-axis values
                  type: "scatter", // Specify 'scatter' for line graph
                  mode: "lines", // Line mode
                  marker: { color: "blue" }, // Line color
                },
              ]}
              style={{ width: "300px", height: "200px" }}
            />
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5], // X-axis values
                  y: [10, 15, 13, 17, 19], // Y-axis values
                  type: "scatter", // Specify 'scatter' for line graph
                  mode: "lines", // Line mode
                  marker: { color: "green" }, // Line color
                },
              ]}
              style={{ width: "300px", height: "200px" }}
            />
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5], // X-axis values
                  y: [10, 15, 13, 17, 19], // Y-axis values
                  type: "scatter", // Specify 'scatter' for line graph
                  mode: "lines", // Line mode
                  marker: { color: "red" }, // Line color
                },
              ]}
              style={{ width: "300px", height: "200px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AppGraph;
