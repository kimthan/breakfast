import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './BuyButton.css'
export const BuyButton = ({productsLength}) =>{
   
    const itemLength = productsLength.filter(product => {
        return product.tobuy === true
    }).length
    return(<div>

        <Link to="/tobuy" className="buybutton__link">
        {itemLength ? <div className="buybutton"><h5>{itemLength} items to buy</h5></div>:''}
    </Link>
    </div>
    )
}