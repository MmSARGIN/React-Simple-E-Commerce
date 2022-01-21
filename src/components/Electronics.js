
import React, { useContext} from "react";

import { BooksContext } from "../App";

function Electronics() {
const context = useContext(BooksContext)
console.log(context.state)
    return (
        <div>
             {context.state.bookList.map((item)=> item.category === "electronics" ?  <div key={item.id} className="book">
        <img
          src={item.image}
          alt={item.name}
        />
        <div>
          <h4>{(item.category).toUpperCase()}</h4>
          <p>{item.title}</p>
          <p>Fiyat: &#8378; {item.price}</p>
          
          <button className="btn" onClick={()=>context.addToCart(item)}>Sepete Ekle</button>
          <button className="btn" onClick={()=> context.removeFromCart(item.id)}>Sepetten Çıkar</button>
        </div>
      </div> : "")}
        </div>
    )
}

export default Electronics
