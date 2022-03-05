import React from 'react';
import './Checkout.css';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
       <div className="checkout__left">
           {basket?.length === 0 ? (
           <div>
               <h2>Your Shopping Basket is empty</h2>
               <p>You have no items in your basket</p>
           </div>
       ) : (
        <div>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket?.map((item) => (
             <CheckoutProduct 
                id= {item.id}
                title= {item.title}
                image= {item.image}
                 price= {item.price}
                rating= {item.rating}
            />
            
        ))}
       </div>

       )}
    </div>
  {basket.length > 0 && (
    <div className="checkout__right"> 
      <Subtotal />
    </div>
  )}
    </div>
  )
}

export default Checkout