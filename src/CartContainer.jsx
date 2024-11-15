import React from 'react';
import { useGlobalContext } from './context';
import CartItem from './CartItem';




const CartContainer = () => {

  const {cart, clearCart, total} = useGlobalContext();

  return ( 
    <>
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
    </>
   );
}
 
export default CartContainer;