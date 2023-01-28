import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Coin from "../Coin/Coin";
import { searchedCoin } from "../CoinSearch/CoinSearch";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const searchedCoinName = useContext(searchedCoin);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchedCoinName.toLowerCase())
  );

  if (filteredCoins.length === 0) {
    return (
      <>
        <MDBTable hover align="middle">
          <MDBTableHead className="bg-success bg-opacity-50">
            <tr className="text-end">
              <th scope="col" className="text-center">
                Rank
              </th>
              <th scope="col" className="text-start">
                Coin
              </th>
              <th scope="col">Price</th>
              <th scope="col">24h %</th>
              <th scope="col">Market Cap</th>
              <th scope="col">Volume</th>
            </tr>
          </MDBTableHead>
        </MDBTable>
        <h5 className="p-2 text-center ">No results found</h5>
      </>
    );
  }

  return (
    <>
      <MDBTable hover align="middle">
        <MDBTableHead className="bg-success bg-opacity-50">
          <tr className="text-end">
            <th scope="col" className="text-center">
              Rank
            </th>
            <th scope="col" className="text-start">
              Coin
            </th>
            <th scope="col">Price</th>
            <th scope="col">24h %</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Volume</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default CoinTable;
