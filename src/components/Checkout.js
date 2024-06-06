import React from 'react';
import './Checkout.css';

function Checkout({ cart }) {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="checkout-container">
            <h2>Order Summary</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className="checkout-item">
                            <img src={item.url} alt={item.name} width={40} />
                            <span className="checkout-item-name">{item.name}</span>
                            <span className="checkout-item-quantity">x {item.quantity}</span>
                            <span className="checkout-item-price">Rs. {item.price * item.quantity}</span>
                        </div>
                    ))}
                    <div className="checkout-total">
                        Total: Rs. {calculateTotal()}
                    </div>
                    <button className="checkout-button">Confirm Order</button>
                </>
            )}
        </div>
    );
}

export default Checkout;
