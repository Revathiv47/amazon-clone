import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
       <CurrencyFormat 
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.lenght} items) : <strong>{`Rs {price}`}</strong>
            </p>
            </>
        )}
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"Rs"}
       />
    <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal