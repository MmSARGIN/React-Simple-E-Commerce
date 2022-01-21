import React, { useContext} from "react";
import './styles/pay.css'

import { BooksContext } from "../App";

function Pay() {
    const context = useContext(BooksContext)

  const totalPrice = context.state.cart.reduce((total, book) =>( total + book.price * book.count), 0)
    return (
        <div className="pay">
            
            <h3>Ödeme Seçenekleri</h3>
            <select name="" id="">
            <option value="">Ödeme Şeklinizi Seçiniz</option>
                <option value="">Kapıda Ödeme</option>
                <option value="">İnternetten Ödeme</option>
                <option value="">Kredi Kartı</option>
            </select>
            <h3>Kredi Kartı Bilgileri</h3>
           <input type="text" placeholder='Kart Numarasını Giriniz' /> 
           <h3>Adres</h3>
           <input type="text" placeholder='Adresinizi Yazınız'/>
           <h3>Ödenecek Tutar : ({totalPrice} TL)</h3>
           <button onClick={()=> {
               alert( "Sepetiniz Onaylandı :)")
           }}>Onayla</button>
        </div>
    )
}

export default Pay
