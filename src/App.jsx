import "./App.css";
import { useEffect, useState } from "react";
import { apiDataParserToSchema, updateInDBParser } from "./helper/parser";
import { mock1, newMock } from "./helper/mock1";
import { dataMock } from "./helper/mock14Nov1_55";
import { correctSchemaOfDB } from "./helper/correctSchemaOfDB";
import { TanStackTable } from "./Components/TanStackTable";

// import { Provider, useDispatch } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store"; // Import the configured store and persistor
// import { resetRedux } from "./reduxFunctions";

function App() {
  // this function will filter out the coins not listed in binance
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [fetchNow, setfetchNow] = useState(false);
  // const dispatch = useDispatch();

  const fetchCryptoData = async () => {
    // const url =
    //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=2008bcdd-bd49-49e3-8ec7-2fb845a9851c&start=1&limit=10";
    try {
      const response = await fetch("https://cancrie-be.onrender.com/coins", {});
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setCryptoData(data);
      // addDataInDB(data);
    } catch (err) {
      console.error("Failed to fetch crypto data:", err.message);
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchCryptoData();
  }, []);

  // const addDataInDB = (data) => {
  //   let toUpdateInDb = "";
  //   const oldDataInDB = store.getState().coinLocalDB.coins;
  //   const singTimeValueParsed = apiDataParserToSchema(data);
  //   if (oldDataInDB && oldDataInDB && Object.keys(oldDataInDB)) {
  //     toUpdateInDb = updateInDBParser(singTimeValueParsed, oldDataInDB); // (newData, oldDataBaseData)
  //     dispatch({ type: "ADD_IN_LOCAL_DB", payload: toUpdateInDb });
  //   } else {
  //     dispatch({ type: "ADD_IN_LOCAL_DB", payload: singTimeValueParsed });
  //   }
  // };

  //! clear Local DB
  // useEffect(() => {
  //   resetRedux();
  // }, []);

  // useEffect(() => {
  //   if (fetchNow) {
  //     setfetchNow(false);
  //   } else {
  //     setTimeout(() => {
  //       setfetchNow(true);
  //     }, 6 * 1000);
  //   }
  // }, [fetchNow]);

  // useEffect(() => {
  //   if (fetchNow) {
  //     console.log("calling Now");
  //     fetchCryptoData();
  //   }
  // }, [fetchNow]);

  console.log("---> state ", cryptoData);

  return (
    <div className="" style={{ width: "100%", height: "100%" }}>
      <h3>Data Table</h3>
      {/* {store.getState()?.coinLocalDB?.coins && ( */}
      {cryptoData && cryptoData.length > 0 && (
        <>
          <TanStackTable data={cryptoData} refresh={fetchCryptoData} />{" "}
        </>
      )}

      {/* )} */}
    </div>
  );
}

export default App;
