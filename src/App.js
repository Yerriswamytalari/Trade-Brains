import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Watchlist from "./Components/Watchlist";

const App = () => {
  return (
    <Router>
      <div>
        <header style={{height:"100px",backgroundColor:"black"}}>
          <nav>
            <ul style={{display:"flex",paddingTop:"30px"}}>
              <li>
                <Link style={{color:"white",fontSize:"25px",textDecoration:"none"}} to="/">Home</Link>
              </li>
              <li style={{marginLeft:"40px"}}>
                <Link style={{color:"white",fontSize:"25px",textDecoration:"none"}} to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
