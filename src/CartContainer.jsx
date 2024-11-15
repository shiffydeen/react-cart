import React from 'react';
import { useGlobalContext } from './context';
import CartItem from './CartItem';




const CartContainer = () => {

  const {data} = useGlobalContext();

  return ( 
    <>
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {data.map((item) => {
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$1500</span>
          </h4>
        </div>
        <button className='btn clear-btn'>
          clear cart
        </button>
      </footer>
    </section>
    </>
   );
}
 
export default CartContainer;