import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToWatchlistAction,
  searchCompaniesAction,
} from "../Redux/ReduxActions";
import "../Components/Home.css";
import {FaSearch} from "react-icons/fa"
// import { searchCompaniesAction, addToWatchlistAction } from "../actions";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);
  console.log(companies);
  //  const store = companies

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchCompaniesAction(query));
  };

  const handleAddToWatchlist = (symbol) => {
    dispatch(addToWatchlistAction(symbol));
  };

  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <FaSearch id="icon"/>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search companies..."
      />
      
      <ul id="ul">
        {
        companies?.map((company) => (
               
          <li className="li">
            <h2>Name:- {company["2. name"]}</h2>
            <h4> $ {company["9. matchScore"]}</h4>
            <button id="btn1" onClick={() => handleAddToWatchlist(company["1. symbol"])}>
              +
            </button>
          </li>
       
          
        ))}
      </ul>
     
    </div>
  );
};

export default Home;
