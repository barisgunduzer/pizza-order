import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./OrderPage.css";
import logo from "../assets/logo.svg";

//TODO: Layoutta tasarıma uymayan alanlar düzeltilecek
const OrderPage = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedDough, setSelectedDough] = useState("");
    const [toppings, setToppings] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const handleToppingChange = (topping) => {
        if (toppings.includes(topping)) {
            setToppings(toppings.filter((item) => item !== topping));
        } else if (toppings.length < 10) {
            setToppings([...toppings, topping]);
        }
    };

    return (
        <div className="order-container">
            <div className="order-header">
                <div className="banner">
                    <img src={logo} alt="Teknolojik Yemekler Logo"/>
                </div>
                <nav className="breadcrumb">
                    <Link to="/">Ana Sayfa</Link> &gt; <span>Seçenekler</span> &gt; <strong>Sipariş Oluştur</strong>
                </nav>
            </div>

            <div className="product-details">
                <h2>Position Absolute Acı Pizza</h2>
                <p className="price">85.50₺</p>
                <p>
                Frontend dev’ler hala position:absolute kullanıyor...
                </p>
            </div>

            <div className="options">
                <h3>Boyut Seç *</h3>
                <label><input type="radio" name="size" value="küçük"
                              onChange={() => setSelectedSize("küçük")}/> Küçük</label>
                <label><input type="radio" name="size" value="orta"
                              onChange={() => setSelectedSize("orta")}/> Orta</label>
                <label><input type="radio" name="size" value="büyük"
                              onChange={() => setSelectedSize("büyük")}/> Büyük</label>
            </div>

            <div className="options">
                <h3>Hamur Seç *</h3>
                <select onChange={(e) => setSelectedDough(e.target.value)}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="kalın">Kalın</option>
                </select>
            </div>

            <div className="toppings">
                <h3>Ek Malzemeler (En fazla 10)</h3>
                {["Pepperoni", "Sosis", "Mısır", "Sucuk", "Ananas", "Jalapeno"].map((topping) => (
                    <label key={topping}>
                        <input type="checkbox" checked={toppings.includes(topping)}
                               onChange={() => handleToppingChange(topping)}/>
                        {topping}
                    </label>
                ))}
            </div>

            <textarea placeholder="Siparişe eklemek istediğiniz bir not var mı?"/>

            <div className="order-summary">
                <h3>Sipariş Toplamı</h3>
                <p>Seçimler: {quantity * 25}₺</p>
                <p>Toplam: {quantity * 85.5}₺</p>
            </div>

            <button className="cta-button" onClick={() => navigate("/success")}>Sipariş Ver</button>
        </div>
    );
};

export default OrderPage;
