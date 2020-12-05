import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="The lean startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="48538094"
          title="Kenwood KMix Stand Mixer for Baking, Stylish Kitxhen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.99}
          image="https://m.media-amazon.com/images/I/61Z4fxBfkVL._AC_UY218_.jpg"
          // image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={3}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300*400_retinamobilex2$.jpg"
          rating={5}
        />
        {/* https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UL320_.jpg */}
        <Product
          id="3254354345"
          title="New Apple IPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 * 1440"
          price={1094.99}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
