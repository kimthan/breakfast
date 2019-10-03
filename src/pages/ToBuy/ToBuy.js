import React from "react";
import {handleProductUpdate} from '../../components/updateFirebase'
import './ToBuy.css'

export const ToBuy = ({products, handleModal}) => {

    const ToBuy = products
    .filter(product => product.tobuy === true)
    .map(product => {
        const handleProductClick = () => {
            handleModal(product)
        }

        return (
            <div className="tobuy" key={product.id} onClick={()=>handleProductClick()
            }>
                <img className="tobuy__img" src={product.src} alt={product.name} />
                <div className='tobuy__name'>
                    <h4>{product.name}</h4>
                </div>
            </div>
        );
    });
 
   
    return <div className="product__list">{ToBuy}</div>;
};
