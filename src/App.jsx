import "./App.css";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export const App = () => {
  const [dataSetRow, setterDataSetRow] = useState();
  const [dataSetCol, setterDataSetCol] = useState();
  const [data_new, setdata_new] = useState();

  const styles = (params, name) => {
    if (!isNaN(params?.formattedValue)) {
      return +params?.formattedValue > 0 ? "positive-change" : "";
    }
  };

  useEffect(() => {
    if (data_new?.length) {
      console.log("data_new", data_new);
      const dates = data_new[0].history;
      const columns = [
        {
          field: "col0",
          headerName: "Sr.no",
          width: 60,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col1",
          headerName: "Name",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col2",
          headerName: "Vol",
          width: 130,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col3",
          headerName: "Price",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col4",
          headerName: "Vol - " + dates[0]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col5",
          headerName: "Vol - " + dates[1]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col6",
          headerName: "Vol - " + dates[2]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col7",
          headerName: "Vol - " + dates[3]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col8",
          headerName: "Vol - " + dates[4]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col9",
          headerName: "Vol - " + dates[5]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col10",
          headerName: "Vol - " + dates[6]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col11",
          headerName: "Price - " + dates[0]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col12",
          headerName: "Price - " + dates[1]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col13",
          headerName: "Price - " + dates[2]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col14",
          headerName: "Price - " + dates[3]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col15",
          headerName: "Price - " + dates[4]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col16",
          headerName: "Price - " + dates[5]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col17",
          headerName: "Price - " + dates[6]?._id.substr(8) || "",
          width: 80,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col18",
          headerName: "Rank - " + dates[0]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col19",
          headerName: "Rank - " + dates[1]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col20",
          headerName: "Rank - " + dates[2]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col21",
          headerName: "Rank - " + dates[3]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col22",
          headerName: "Rank - " + dates[4]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col23",
          headerName: "Rank - " + dates[5]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
        {
          field: "col24",
          headerName: "Rank - " + dates[6]?._id.substr(8) || "",
          width: 70,
          cellClassName: (params) => styles(params),
        },
      ];

      const rows = data_new.map((item, id) => {
        if (item?.history?.length) {
          return {
            id: id,
            col0: id + 1,
            col1: item.symbol,
            col2: (+item?.volume_24h)?.toFixed(2),
            col3: item?.price?.toFixed(2) || 0,
            col4:
              (+item.history[0]?.volume_24h < +item?.volume_24h
                ? (+item.history[0]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[0]?.volume_24h) ||
              0,
            col5:
              (+item.history[1]?.volume_24h < +item?.volume_24h
                ? (+item.history[1]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[1]?.volume_24h) ||
              0,
            col6:
              (+item.history[2]?.volume_24h < +item?.volume_24h
                ? (+item.history[2]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[2]?.volume_24h) ||
              0,
            col7:
              (+item.history[3]?.volume_24h < +item?.volume_24h
                ? (+item.history[3]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[3]?.volume_24h) ||
              0,
            col8:
              (+item.history[4]?.volume_24h < +item?.volume_24h
                ? (+item.history[4]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[4]?.volume_24h) ||
              0,
            col9:
              (+item.history[5]?.volume_24h < +item?.volume_24h
                ? (+item.history[5]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[5]?.volume_24h) ||
              0,
            col10:
              (+item.history[6]?.volume_24h < +item?.volume_24h
                ? (+item.history[6]?.volume_24h / +item?.volume_24h) * 100
                : -(+item?.volume_24h * 100) / +item.history[6]?.volume_24h) ||
              0,
            col11:
              (+item.history[0]?.price < +item?.price
                ? (+item.history[0]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[0]?.price) || 0,
            col12:
              (+item.history[1]?.price < +item?.price
                ? (+item.history[1]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[1]?.price) || 0,
            col13:
              (+item.history[2]?.price < +item?.price
                ? (+item.history[2]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[2]?.price) || 0,
            col14:
              (+item.history[3]?.price < +item?.price
                ? (+item.history[3]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[3]?.price) || 0,
            col15:
              (+item.history[4]?.price < +item?.price
                ? (+item.history[4]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[4]?.price) || 0,
            col16:
              (+item.history[5]?.price < +item?.price
                ? (+item.history[5]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[5]?.price) || 0,
            col17:
              (+item.history[6]?.price < +item?.price
                ? (+item.history[6]?.price / +item?.price) * 100
                : -(+item?.price * 100) / +item.history[6]?.price) || 0,
            col18:
              (+item.history[0]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[0]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[0]?.cmc_rank) || 0,
            col19:
              (+item.history[1]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[1]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[1]?.cmc_rank) || 0,
            col20:
              (+item.history[2]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[2]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[2]?.cmc_rank) || 0,
            col21:
              (+item.history[3]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[3]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[3]?.cmc_rank) || 0,
            col22:
              (+item.history[4]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[4]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[4]?.cmc_rank) || 0,
            col23:
              (+item.history[5]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[5]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[5]?.cmc_rank) || 0,
            col24:
              (+item.history[6]?.cmc_rank < +item?.cmc_rank
                ? (+item.history[6]?.cmc_rank / +item?.cmc_rank) * 100
                : -(+item?.cmc_rank * 100) / +item.history[6]?.cmc_rank) || 0,
          };
        } else {
          return {
            id: id,
            col0: 0,
            col1: 0,
            col2: 0,
            col3: 0,
            col4: 0,
            col5: 0,
            col6: 0,
            col7: 0,
            col8: 0,
            col9: 0,
            col10: 0,
            col11: 0,
            col12: 0,
            col13: 0,
            col14: 0,
            col15: 0,
            col16: 0,
            col17: 0,
            col18: 0,
            col19: 0,
            col20: 0,
            col21: 0,
            col22: 0,
            col23: 0,
            col24: 0,
          };
        }
      });

      setterDataSetRow(rows);
      setterDataSetCol(columns);
    }
  }, [data_new]);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    // const response = await fetch("http://localhost:5000/get-coins")
    await fetch("http://13.51.173.4:5000/get-coins", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Or response.text() based on your API response
      })
      .then((data) => {
        if (data?.length) {
          setdata_new(data);
        } // Process the parsed response data here
      })
      .catch((error) => {
        setdata_new([]);
        console.error("Error:", error);
      });
  };

  return (
    <div className="" style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          flexDirection: "row",
        }}
      ></div>
      <h3>Data Table</h3>
      {data_new?.length > 0 && dataSetCol?.length && dataSetCol?.length && (
        <DataGrid
          rows={dataSetRow}
          columns={dataSetCol}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 600,
              },
            },
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
          }
        />
      )}
    </div>
  );
};
