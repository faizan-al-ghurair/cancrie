import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  get24HrsVol,
  getDay1Price,
  getDay1Rank,
  getDay1Vol,
  getDayPrice,
  getDayRank,
  getDayVol,
  getRank,
} from "../helper/dayLogics";

const volColName = "volume_24h";
const colWidth = 90;

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
      oneDay: get24HrsVol(item),
      name: item.name,
      [dataTopMap0]: getDay1Vol(item, 0),
      [dataTopMap1]: getDayVol(item, 1),
      [dataTopMap2]: getDayVol(item, 2),
      [dataTopMap3]: getDayVol(item, 3),
      [dataTopMap4]: getDayVol(item, 4),
      [dataTopMap5]: getDayVol(item, 5),
      [dataTopMap6]: getDayVol(item, 6),
      [dataTopMap7]: getDayVol(item, 7),
      ["price-" + dataTopMap0]: getDay1Price(item, 0),
      ["price-" + dataTopMap1]: getDayPrice(item, 1),
      ["price-" + dataTopMap2]: getDayPrice(item, 2),
      ["price-" + dataTopMap3]: getDayPrice(item, 3),
      ["price-" + dataTopMap4]: getDayPrice(item, 4),
      ["price-" + dataTopMap5]: getDayPrice(item, 5),
      ["price-" + dataTopMap6]: getDayPrice(item, 6),
      ["price-" + dataTopMap7]: getDayPrice(item, 7),
      ["Rank-" + dateTOmap[0]]: getDay1Rank(item, 0),
      ["Rank-" + dateTOmap[1]]: getDayRank(item, 1),
      ["Rank-" + dateTOmap[2]]: getDayRank(item, 2),
      ["Rank-" + dateTOmap[3]]: getDayRank(item, 3),
      ["Rank-" + dateTOmap[4]]: getDayRank(item, 4),
      ["Rank-" + dateTOmap[5]]: getDayRank(item, 5),
      ["Rank-" + dateTOmap[6]]: getDayRank(item, 6),
      ["Rank-" + dateTOmap[7]]: getDayRank(item, 7),
    };
  });
};

export const TanStackTable = ({ data, refresh }) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 20,
    page: 0,
  });
  const [ipvalue, setValue] = useState(0);
  const rows = formatData(data);

  const headerDay1 = Object.keys(data[0].dateTime)?.reverse()?.[0] || "Day 1";
  const headerDay2 = Object.keys(data[0].dateTime)?.reverse()?.[1] || "Day 2";
  const headerDay3 = Object.keys(data[0].dateTime)?.reverse()?.[2] || "Day 3";
  const headerDay4 = Object.keys(data[0].dateTime)?.reverse()?.[3] || "Day 4";
  const headerDay5 = Object.keys(data[0].dateTime)?.reverse()?.[4] || "Day 5";
  const headerDay6 = Object.keys(data[0].dateTime)?.reverse()?.[5] || "Day 6";
  const headerDay7 = Object.keys(data[0].dateTime)?.reverse()?.[6] || "Day 7";
  const headerDay8 = Object.keys(data[0].dateTime)?.reverse()?.[7] || "Day 8";
  const styles = (params, name) => {
    const value = parseFloat(params.value);
    if (value > ipvalue) {
      return name === "price" ? "positive-change-price" : "positive-change";
    } else if (value < 0) {
      if (ipvalue) {
        return "";
      }
      return name === "price" ? "negative-change-price" : "negative-change";
    }
    return name === "price" ? "secondary-cell" : ""; // No styling for zero or undefined values
  };
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: colWidth,
      cellClassName: "sticky-column", // Makes the first column sticky
      headerClassName: "sticky-column", // Also make header sticky
    },
    {
      field: "oneDay",
      headerName: "24 Hrs",
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay1,
      headerName: headerDay1,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay2,
      headerName: headerDay2,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay3,
      headerName: headerDay3,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay4,
      headerName: headerDay4,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay5,
      headerName: headerDay5,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay6,
      headerName: headerDay6,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay7,
      headerName: headerDay7,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: headerDay8,
      headerName: headerDay8,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `price-${headerDay1}`,
      headerName: `price-${headerDay1}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay2}`,
      headerName: `price-${headerDay2}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay3}`,
      headerName: `price-${headerDay3}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay4}`,
      headerName: `price-${headerDay4}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay5}`,
      headerName: `price-${headerDay5}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay6}`,
      headerName: `price-${headerDay6}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay7}`,
      headerName: `price-${headerDay7}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `price-${headerDay8}`,
      headerName: `price-${headerDay8}`,
      width: colWidth,
      cellClassName: (params) => styles(params, "price"),
      headerClassName: "colored-header-price",
    },
    {
      field: `Rank-${headerDay1}`,
      headerName: `Rank-${headerDay1}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay2}`,
      headerName: `Rank-${headerDay2}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay3}`,
      headerName: `Rank-${headerDay3}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay4}`,
      headerName: `Rank-${headerDay4}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay5}`,
      headerName: `Rank-${headerDay5}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay6}`,
      headerName: `Rank-${headerDay6}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay7}`,
      headerName: `Rank-${headerDay7}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
    {
      field: `Rank-${headerDay8}`,
      headerName: `Rank-${headerDay8}`,
      width: colWidth,
      cellClassName: (params) => styles(params),
    },
  ];

  return (
    <div
      style={{
        height: 600,
        width: "100%",
      }}
    >
      <div
        style={{
          flexDirection: "row",
        }}
      >
        <p>
          Show above %{" "}
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setValue(e.target.value);
            }}
          />
          <button
            style={{ marginLeft: 20 }}
            onClick={() => {
              refresh();
            }}
            title="Refresh Data"
          >
            {"Refresh"}
          </button>
        </p>
      </div>
      <div style={{ marginTop: 10 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
          }
        />
      </div>
    </div>
  );
};
