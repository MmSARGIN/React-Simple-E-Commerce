import React, { useContext} from "react";
import { Link } from "react-router-dom";
import './styles/cart.css'
import { BooksContext } from "../App";

const Cart = () => {

  const context = useContext(BooksContext)

  const totalPrice = context.state.cart.reduce((total, book) =>( total + book.price * book.count), 0)




  return (
    <div>
      <h2>
        
      <button><Link to="/pay">Alışverişi Tamamla</Link></button>

      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>
<div>
      {context.state.cart.map((cart)=> (<div key={cart.id} className="book">
        <img
          src={cart.image}
          alt={cart.id}
        />
        <div>
          <h4>{(cart.category).toUpperCase()}</h4>
          <p>{cart.title}</p>
          <p>Fiyat: &#8378;{cart.price}</p>
          <p>Toplam: &#8378;{(cart.price * cart.count).toFixed(2)}</p>
          <p>Sepetinizde bu kitaptan toplam {cart.count} adet var.</p>
          <button onClick={()=> context.decrease(cart.id)}>-</button>
          <button onClick={()=> context.removeFromCart(cart.id)}>Sepetten Çıkar</button>
          <button onClick={()=> context.increase(cart.id)}>+</button>
        </div>
      </div>))}
      </div>
    </div>
  );
};

export default Cart;





