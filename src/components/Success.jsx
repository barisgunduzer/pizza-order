import React from "react";
import "./Success.css";
import logo from "../assets/logo.svg";

//TODO: Layoutta tasarıma uymayan alanlar düzeltilecek

const Success = () => {
    return (
        <div className="success-container">
            <div className="banner">
                <img src={logo} alt="Teknolojik Yemekler Logo" />
            </div>
            <div className="message">
                <h2>🍕</h2>
                <h2>TEBRİKLER! <br/> SİPARİŞİNİZ BAŞARIYLA ALINDI!</h2>
                <h3>PİZZA SİPARİŞİN ŞU AN QUEUE'DA ONAYLANMAYI BEKLİYOR. KURYEMİZ YOLA ÇIKTIĞINDA TELEFONUNA EVENT
                    FIRLATILACAK!</h3>
                <footer>
                    <p className="limited-offer">
                        Bir sonraki siparişinizde sınırlı sayıda sipariş alacağımız odun ateşinde pişen hafif acılı, çıtır ve adı gibi tadı da başarılı deneysel lezzetimiz SAKSESS-200 pizzamızı (Sucuk, Acı Biber (Chili), Kekik, Sosis, Ezine Peyniri, Soğan,
                        Siyah Zeytin) şefimizden ısrarla request ediniz :)
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Success;
