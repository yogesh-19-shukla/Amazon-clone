import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
           <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
           
           <div className="home_row">
           <Product id="12321341" title="Ikigai: The Japanese secret to a long and happy life" price={320} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" />
           <Product id="12321342" title="A Gentleman in Moscow: The worldwide bestseller" price={420} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51k+lXZyJ6L._SX322_BO1,204,203,200_.jpg" />
           </div>

           <div className="home_row">
           <Product id="12321343" title="boAt Stone 260 Wireless 4W Speaker" price={12999} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81QfWDpsFfL._SL1500_.jpg" />
           <Product id="12321344" title="Echo Dot (3rd Gen) with Alexa (Black)" price={3299} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg" />
           <Product id="12321345" title="Mi Smart Band with Personal Activity Intelligence " price={2499} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg" />
           </div>

           <div className="home_row">
           <Product id="12321346" title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)" price={18999} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg" />
           </div>

        </div>
    )
}

export default Home
