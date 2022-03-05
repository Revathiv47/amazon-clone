import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {id: id, 
                    title:title, 
                    image:image,
                     price:price,
                    rating:rating,
                }
        })

    }
  return (
    <div className="product">
        <p>{title}</p>
        <p className="product__price">
            <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p >

                        <img className="product_star" src="data:image/jpeg;base64,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" alt="" />
                    </p>
                ))
            }

        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>

    </div>
  )
}

export default Product