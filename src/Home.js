import React from 'react'
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
     <img className="home__image" src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" alt="" />
      <div className="home__row">

      
      <Product
      id="1"
      title="thebook"
      price={200}
      rating={5}
      image="https://www.hubspot.com/hubfs/ecommerce%20busines.jpg"
       />
       <Product
      id="1"
      title="thebook"
      price={200}
      rating={5}
      image="https://www.hubspot.com/hubfs/ecommerce%20busines.jpg"
       />
       <Product
      id="1"
      title="thebook"
      price={200}
      rating={5}
      image="https://www.hubspot.com/hubfs/ecommerce%20busines.jpg"
       />
       </div>
    </div>
  )
}

export default Home