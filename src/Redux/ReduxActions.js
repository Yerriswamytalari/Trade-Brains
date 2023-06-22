import { getStockPrice, searchCompanies } from "../Search";

export const ActionTypes = {
  SEARCH_COMPANIES: "SEARCH_COMPANIES",
  ADD_TO_WATCHLIST: "ADD_TO_WATCHLIST",
  REMOVE_FROM_WATCHLIST: "REMOVE_FROM_WATCHLIST",
};

export const searchCompaniesAction = (query) => async (dispatch) => {
  const companies = await searchCompanies(query);
  dispatch({ type: ActionTypes.SEARCH_COMPANIES, payload: companies });
};

export const addToWatchlistAction = (symbol) => async (dispatch) => {
  const price = await getStockPrice(symbol);
  if (price) {
    dispatch({
      type: ActionTypes.ADD_TO_WATCHLIST,
      payload: { symbol, price },
    });
  }
};

export const removeFromWatchlistAction = (symbol) => ({
  type: ActionTypes.REMOVE_FROM_WATCHLIST,
  payload: symbol,
});
