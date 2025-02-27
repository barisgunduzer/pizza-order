import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom"; // CSS dosyamızı ekliyoruz

//TODO: cta button düzeltilecek

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="title">Teknolojik Yemekler</h1>
            <h2 className="subtitle">KOD ACIKTIRIR<br/>PİZZA, DOYURUR</h2>
            <button className="cta-button" onClick={() => navigate("/order")}>ACIKTIM</button>
        </div>
    );
};

export default Home;