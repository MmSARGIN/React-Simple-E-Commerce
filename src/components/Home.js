import React, { useContext} from "react";
import './styles/home.css'
import { BooksContext } from "../App";


function Home() {
    const context = useContext(BooksContext)
    return (
        <div className="main">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {context.state.bookList.map((item, i)=>
    <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item"  }>
      <img src={item.image} className="d-block w-100 home-img" alt="..."/>
    </div>
    
  )}  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Home
