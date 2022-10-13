import React from 'react'
import './ShopCard.css'

function ShopCard(props) {
    return (
    <div>
        <div className='btns'>
            <button className='btn'>All</button>
            <button className='btn'>Websites</button>
            <button className='btn'>Flayers</button>
            <button className='btn'>Business Cards</button>
        </div>
        
        <div className="product-item">
            <h3>{props.item.brand}</h3> 
            <span className="price">{props.item.title}</span>      
            <span className="price">{props.item.description}</span>
            <span className="price">{props.item.descriptionFull}</span>
            <span className="price">{props.item.price} {props.item.currency}</span>
        </div>
  
    </div>
    )
    
}

export default ShopCard;