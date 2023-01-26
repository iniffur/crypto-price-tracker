import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import "./CoinTable.css"
import Coin from "../Coin/Coin";
import { searchedCoin } from "../CoinSearch/CoinSearch";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const searchedCoinName = useContext(searchedCoin);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchedCoinName.toLowerCase())
  );

  return (
    <>
      <table className="coinTable"></table>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price (GBP)</th>
          <th>Rank</th>
          <th>Price Change (24h)</th>
          <th>Market Cap (GBP)</th>
          <th>Volume (GBP)</th>
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.price}
              volume={coin.volume}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
              rank={coin.market_cap_rank}
            />
          );
        })}
      </tbody>
    </>
  );
};

export default CoinTable;
