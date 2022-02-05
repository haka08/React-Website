import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/cupcake.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Cherry's Cakes </h1>
        <p> The most elegant cupcakes</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
