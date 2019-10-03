import React from "react";
import {BuyButton} from '../../components/BuyButton/BuyButton'
import './ProductList.css'

export const ProductList = ({products,handleModal}) => {

const productList = products.map(product => {
    const className= product.tobuy ?'product product--tobuy': 'product'
            const handleProductClick = () => {
                handleModal(product)
            }

        return (
            <div className={className} key={product.id} id={product.id}
                onClick={()=>handleProductClick()
                }
            >
                <img className="product__img" src={product.src} alt={product.name} />
                <div className='product__name'>
                    <h5>{product.tobuy ?'TO BUY': product.name}</h5>
                </div>
                
            </div>
        );
    });
 
   
    return (
        <>
    <div className="product__list">{productList}</div><BuyButton productsLength={products}/></>);
};
