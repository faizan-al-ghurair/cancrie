import "./App.css";
import { useEffect, useState } from "react";
import { apiDataParserToSchema, updateInDBParser } from "./helper/parser";
import { mock1 } from "./helper/mock1";
import { dataMock } from "./helper/mock14Nov1_55";
import { correctSchemaOfDB } from "./helper/correctSchemaOfDB";
import { TanStackTable } from "./Components/TanStackTable";

function App() {
  // this function will filter out the coins not listed in binance
  const singTimeValueParsed = apiDataParserToSchema(dataMock);
  const toUpdateInDb = updateInDBParser(singTimeValueParsed, correctSchemaOfDB); // (newData, oldDataBaseData)

  return (
    <div className="" style={{ width: "100%", height: "100%" }}>
      <h3>Data Table</h3>
      <TanStackTable data={toUpdateInDb} />
    </div>
  );
}

export default App;
