import { ActionTypes } from "./ReduxActions";

const initialState = {
  companies: [],
  watchlist: [],
};

 const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_COMPANIES:
      return { ...state, companies: action.payload };
    case ActionTypes.ADD_TO_WATCHLIST:
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case ActionTypes.REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.symbol !== action.payload),
      };
    default:
      return state;
  }
};
export default stockReducer;
