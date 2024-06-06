import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    return (
        <div className="cart-container">
            <h3>Yeah! Items in Your Cart!</h3>
            {CART?.map((cartItem, cartindex) => (
                <div key={cartindex} className="cart-item">
                    <img src={cartItem.url} width={40} alt={cartItem.name} />
                    <span className="item-name"> {cartItem.name} </span>
                    <div className="quantity-controls">
                        <button
                            className="quantity-button"
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index
                                        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                                        : item;
                                });
                                setCART(_CART);
                            }}
                        >
                            -
                        </button>
                        <span className="item-quantity"> {cartItem.quantity} </span>
                        <button
                            className="quantity-button"
                            onClick={() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index
                                        ? { ...item, quantity: item.quantity + 1 }
                                        : item;
                                });
                                setCART(_CART);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <span className="item-price"> $. {cartItem.price * cartItem.quantity} </span>
                </div>
            ))}
            <div className="total">
                Total: $.{' '}
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </div>
        </div>
    );
}

export default CartList;
