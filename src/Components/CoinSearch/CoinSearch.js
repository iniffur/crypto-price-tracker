import { MDBInput } from "mdb-react-ui-kit";
import React, { useState, createContext } from "react";
import CoinTable from "../CoinTable/CoinTable";
// import "./CoinSearch.css";

const searchedCoin = createContext();

function CoinSearch() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="p-4 text-center ">
        <div className="d-flex justify-content-center mb-4">
          <h3 className="coinText me-2 ">Search for a specific Coin:</h3>
          <form>
            <MDBInput
              type="text"
              label="Search"
              className="coinInput"
              onChange={handleChange}
            />
          </form>
        </div>
        <searchedCoin.Provider value={search}>
          <CoinTable />
        </searchedCoin.Provider>
      </div>
    </>
  );
}

export default CoinSearch;
export { searchedCoin };
