import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg"; // CSS dosyamızı ekliyoruz

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="banner">
                <img src={logo} alt="Teknolojik Yemekler Logo"/>
            </div>
            <h2 className="subtitle">KOD ACIKTIRIR<br/>PİZZA, DOYURUR</h2>
            <button className="cta-button" onClick={() => navigate("/order")}>ACIKTIM</button>
        </div>
    );
};

export default Home;