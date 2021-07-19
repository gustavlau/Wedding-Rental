import React from "react";


export default function Product(props){
    const {details}=props;
    return <div className="store-grid">
        <h2>{details.name}</h2>
        <img src={details.image} alt="" width = "50"/>        
        </div>
}


