import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Media } from 'reactstrap';

function Cart() {
    const itemsInCart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id, color, size) => {
        dispatch({ type: 'CART_REMOVE_FROM_BAG', id, color, size })
    }

    return (
        <div>
            {itemsInCart.length === 0 ? (<span>No Items in Cart! Please add something</span>) : (
                <div>
                    {itemsInCart.map(item => {
                        return (
                            <Media key={item['id']}>
                                <Media left href="#">
                                    <Media object data-src={item['image']} height="200" width="200" alt="" />
                                </Media>
                                <Media body>
                                    <Media heading>
                                        {item['name']}
                                    </Media>
                                    {item['size']}{item['color']}{item['qty']}₹{item['price'] * item['qty']}
                                    <a href="#" onClick={() => handleRemoveFromCart(item['id'], item['color'], item['size'])}>Remove</a>
                                </Media>
                            </Media>

                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Cart;