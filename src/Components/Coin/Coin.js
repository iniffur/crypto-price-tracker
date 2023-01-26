import React from "react";
// import "./Token.css"

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
  rank,
}) => {
  return (
    <>
      <tr className="coinRow">
        <td data-label="Coin">
          <img src={image} alt="coin" class="coinImage"></img>
        </td>
        <td data-label="Name">{name}</td>
        <td data-label="Symbol">{symbol.toUpperCase()}</td>
        <td data-label="Price">{price.toLocaleString()}</td>
        <td data-label="Market Cap Rank">{rank}</td>
        {priceChange < 0 ? (
          <td data-label="Price Change Percentage" className="loss">
            {priceChange.toFixed(2)}%
          </td>
        ) : (
          <td data-label="Price Change Percentage" className=" gain">
            +{priceChange.toFixed(2)}%
          </td>
        )}
        <td data-label="Market Cap">{marketCap.toLocaleString()}</td>
        <td data-label="Volume">{volume.toLocaleString()}</td>
      </tr>
    </>
  );
};

export default Coin;
