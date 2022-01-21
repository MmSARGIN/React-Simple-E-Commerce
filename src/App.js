import React, { createContext, useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { data } from "./data";
import Home from "./components/Home"
import Cart from "./components/Cart";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import Clothes from "./components/Clothes"
import Products from "./components/Products"
import Contact from "./components/Contact"
import Pay from "./components/Pay"
import Login from "./components/Login"
import Nav from "./components/Nav";




export const BooksContext = createContext();

export default function App() {
  const [state, setState] = useState({
    bookList: data,
    cart: [],
  });

  const addToCart = (book) =>
    setState({
      ...state,
      cart: state.cart.find((cardItem) => cardItem.id === book.id)
        ? state.cart.map((cardItem) =>
            cardItem.id === book.id
              ? { ...cardItem, count: cardItem.count + 1 }
              : cardItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cardItem) => cardItem.id !== id),
    });
  };

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cardItem) =>
        cardItem.id === id
          ? { ...cardItem, count: cardItem.count + 1 }
          : cardItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cardItem) =>
        cardItem.id === id
          ? { ...cardItem, count: cardItem.count > 1 ? cardItem.count - 1 : 1 }
          : cardItem
      ),
    });
  };


  

  return (
    <BooksContext.Provider
      value={{ state: state, addToCart, increase, decrease, removeFromCart}}
    >
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/electronics" element={<Electronics/>} ></Route>
            <Route path="/jewelery" element={<Jewelery/>} ></Route>
            <Route path="/clothes" element={<Clothes/>} ></Route>
            <Route path="/products" element={<Products/>} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
            <Route path="/pay" element={<Pay/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
          </Routes>
        </div>
      </Router>
    </BooksContext.Provider>
  );
}
