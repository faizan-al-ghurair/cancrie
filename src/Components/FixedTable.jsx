import React, { useEffect, useState } from "react";
import { MultiGrid, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css"; // Ensure the styles are included
import { parser } from "../helper/parser";
import { mock1 } from "../helper/mock1";

const columnWidth = 200;
const rowHeight = 50;

const FixedTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    // const fetchCryptoData = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await fetch("http://localhost:5000/api/crypto");
    //     console.log("response.json()", response);
    //     if (!response.ok) {
    //       throw new Error(`Error: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setCryptoData(data.data);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCryptoData();
    setData(parser(mock1));
  }, []);

  // console.log("--->", parser(mock1));
  // console.log("--->", [...day_1, ...day_2]);

  // Render each cell (header and data cells)
  const cellRenderer = ({ columnIndex, rowIndex, key, style }) => {
    if (rowIndex === 0) {
      // Render header cells
      return (
        <div
          key={key}
          style={{
            ...style,
            fontWeight: "bold",
            border: "1px solid lightgray",
          }}
        >
          {columns[columnIndex]}
        </div>
      );
    } else {
      // Render data cells
      const rowData = data[rowIndex - 1];
      const dateKey = Object.keys(rowData.dateTime)[0];
      const timeKey = Object.keys(rowData.dateTime[dateKey])[0];
      const entry = rowData.dateTime[dateKey][timeKey];

      let cellData;
      switch (columnIndex) {
        case 0:
          cellData = rowData.name;
          break;
        case 1:
          cellData = dateKey;
          break;
        case 2:
          cellData = new Date(entry.last_updated).toLocaleString();
          break;
        case 3:
          cellData = entry.market_cap.toLocaleString();
          break;
        case 4:
          cellData = entry.price.toFixed(2);
          break;
        case 5:
          cellData = entry?.volume_24h?.toLocaleString();
          break;
        default:
          cellData = "";
      }

      return (
        <div key={key} style={{ ...style, border: "1px solid lightgray" }}>
          {cellData}
        </div>
      );
    }
  };

  const columns = [
    "Name",
    "Date",
    "Last Updated",
    "Market Cap",
    "Price",
    "Volume (24h)",
  ];

  return (
    <>
      {data && data.length > 0 && (
        <AutoSizer style={{ width: "900px", height: "700px" }}>
          {({ width, height }) => (
            <MultiGrid
              fixedColumnCount={2} // Fix the first column (Name)
              fixedRowCount={2} // Fix the header row
              cellRenderer={cellRenderer}
              columnCount={columns.length} // Number of columns
              columnWidth={columnWidth} // Width of each column
              height={height} // Table height
              rowCount={data.length + 1} // +1 for the header row
              rowHeight={rowHeight} // Height of each row
              width={width} // Table width
              // styleBottomLeftGrid={{ outline: "none" }}
              // styleTopLeftGrid={{ outline: "none" }}
              // styleTopRightGrid={{ outline: "none" }}
              style={{
                border: "1px solid lightgray",
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </AutoSizer>
      )}
    </>
  );
};

export default FixedTable;
