import { useEffect, useState } from "react";
import { TanStackTable } from "../Components/TanStackTable";
import { correctSchemaOfDB } from "../helper/correctSchemaOfDB";
import { dataMock } from "../helper/mock14Nov1_55";
import { apiDataParserToSchema, updateInDBParser } from "../helper/parser";

function HomePage() {
  // call api and update the state
  //   const apiDataparsed = apiDataParserToSchema(dataMock);
  //   const oldDbData = correctSchemaOfDB;
  //   const DATA = updateInDBParser(apiDataparsed, oldDbData);
  //   console.log("DATA", DATA);
  console.log("oldDbData", correctSchemaOfDB);

  //   return <FixedTable />;
  return <TanStackTable data={correctSchemaOfDB} />;
}

export default HomePage;
