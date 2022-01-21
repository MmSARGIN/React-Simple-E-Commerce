import React, {useContext} from "react";

import { BooksContext } from "../App";
import './styles/Product.css'



const Products = props => {
const context = useContext(BooksContext)
console.log(context+"p")
const totalPrice = context.state.cart.reduce((total, book) =>( total + book.price * book.count), 0)

  return (
    <div className="products">
      
      
      {context.state.bookList.map((book)=>(<div key={book.id} className="book">
        
        <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{(book.category).toUpperCase()}</h4>
          <p>{book.title}</p>
          <p>Fiyat: &#8378; {book.price}</p>
          
          <button className="btn" onClick={()=>context.addToCart(book)}>Sepete Ekle</button>
          <button  className="btn" onClick={()=> context.removeFromCart(book.id)}>Sepetten Çıkar</button>
        </div>
      </div>))}
    </div>
  );
};

export default Products;
