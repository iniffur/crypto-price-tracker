import { MDBIcon } from "mdb-react-ui-kit";
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
      <tr className="text-end fw-bold">
        <td data-label="Market Cap Rank" className="text-center">
          {rank}
        </td>
        <td data-label="Coin" className="text-start">
          <div className="d-flex align-items-center">
            <img
              src={image}
              alt="coin"
              class="coinImage"
              className="rounded-circle"
              style={{ width: "45px", height: "45px" }}
            ></img>
            <p className="m-0">&nbsp;&nbsp;{name}</p>
            <p className="text-muted m-0">&nbsp;&nbsp;{symbol.toUpperCase()}</p>
          </div>
        </td>
        <td data-label="Price">${price.toLocaleString()}</td>
        {priceChange < 0 ? (
          <td data-label="Price Change Percentage" className="text-danger">
            <MDBIcon className="me-1" fas icon="caret-down" />
            {priceChange.toFixed(2)}%
          </td>
        ) : (
          <td data-label="Price Change Percentage" className="text-success">
            <MDBIcon className="me-1" fas icon="caret-up" />+
            {priceChange.toFixed(2)}%
          </td>
        )}
        <td data-label="Market Cap">${marketCap.toLocaleString()}</td>
        <td data-label="Volume">${volume.toLocaleString()}</td>
      </tr>
    </>
  );
};

export default Coin;
