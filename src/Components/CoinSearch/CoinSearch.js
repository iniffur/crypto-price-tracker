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
      <div className="coinSearchContainer">
        <div className="coinSearch">
          <h1 className="coinText">Search for a specific Coin</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
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
