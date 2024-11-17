import React from "react";
import "./App.css";
import { useTable } from "react-table";

export const TableComponent = (props) => {
  // allCoinData
  const data = React.useMemo(() => props.allCoinData, []) || [];
  const formattedDate = (d) => {
    const date = new Date(d);
    const options = {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Set to true for 12-hour format
    };
    return date.toLocaleString("en-GB", options).replace(",", "");
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "symbol",
        accessor: "symbol",
      },
      {
        Header: "name",
        accessor: "name",
      },
      //   {
      //     Header: "image",
      //     accessor: "image",
      //   },
      {
        Header: "current_price",
        accessor: "current_price",
      },
      {
        Header: "total_volume",
        accessor: "total_volume",
      },
      {
        Header: "last_updated",
        accessor: "last_updated",
        Cell: ({ cell: { value } }) => formattedDate(value),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{
        border: "solid 1px black",
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        {headerGroups.map((headerGroup, id) => (
          <tr
            key={id}
            {...headerGroup.getHeaderGroupProps()}
            style={{ borderBottom: "solid 2px black" }}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ padding: "10px", border: "solid 1px black" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row,id) => {
          prepareRow(row,id);
          return (
            <tr
              {...row.getRowProps()}
              style={{ borderBottom: "solid 1px lightgray" }}
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{ padding: "10px", border: "solid 1px black" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
