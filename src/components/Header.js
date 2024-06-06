import React from 'react';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)}>Amazon Commerce</div>
            <div>Home</div>
            <div>About</div>
            <div>Products</div>
            <div>Categories</div>
            <div>Careers</div>

            <div onClick={() => props.handleShow(true)}>
                <span className='cartimg'><FaShoppingCart /> </span>
                Cart
                <sup className='count'> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
