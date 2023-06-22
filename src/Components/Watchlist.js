import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlistAction } from "../Redux/ReduxActions";
// import { removeFromWatchlistAction } from "../actions";
const Watchlist = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  const handleRemoveFromWatchlist = (symbol) => {
    dispatch(removeFromWatchlistAction(symbol));
  };

  return (
    <div>
      <h1>Watch-List</h1>
      <table>
        <thead>
          <tr>
            <th style={{fontSize:"25px"}}>Company</th>
            <th style={{fontSize:"25px"}}>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((item) => (
            <tr key={item.symbol}>
              <td>{item.symbol}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleRemoveFromWatchlist(item.symbol)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
