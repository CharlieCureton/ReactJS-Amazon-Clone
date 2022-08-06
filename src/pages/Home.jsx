import React from 'react';
import '../css/Home.css';
import Banner from '../assets/banner.webp';
import Product from '../components/Product';

import Product1 from '../assets/products/product1.webp';
import Product2 from '../assets/products/product2.webp';
import Product3 from '../assets/products/product3.webp';
import Product4 from '../assets/products/product4.webp';
import Product5 from '../assets/products/product5.webp';

function Home() {
  return (
    <div className="home__container">
        <img className="home__banner" src={Banner} alt="Home page banner"/>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image={Product1}
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for
            Baking, Stylish Kitchen Mixer with
            K-beater, Dough Hook and Whisk, 5 Litre
            Glass Bowl"
            price={239.0}
            rating={4}
            image={Product2}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={Product3}
            />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={Product4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={Product5}
          />
        </div>

        <div className="home__row">
          <Product 
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved
            LED Gaming Monitor - Super Ultra Wide
            Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
    </div>
  )
}

export default Home