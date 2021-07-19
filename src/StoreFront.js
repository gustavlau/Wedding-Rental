import React from "react";
import Product from './Product.js';

export default function StoreFront(){
    const products = [{
        name: "Triangle Arch",
        image: "https://i.etsystatic.com/22633352/r/il/20daf3/2783992536/il_794xN.2783992536_dxvt.jpg"
    }, {
        name: "Horizontal Arch",
        image: "https://i.etsystatic.com/18085683/r/il/50ca90/2107512574/il_570xN.2107512574_py7e.jpg"
    }]
    return <div className="store-front">
        <Product details={products[0]}/>
        <Product details={products[1]}/>
    </div>
}