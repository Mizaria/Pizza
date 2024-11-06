import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        <Pizza 
          image="focaccia.jpg" 
          name="Focaccia Pizza" 
          description="Bread With Italian Olive Oil and rosemary" 
          price="Price- $10" 
          isSoldOut={false} 
        />
        <Pizza 
          image="funghi.jpg" 
          name="Funghi Pizza" 
          description="Tomato, mozzarella, Mushroom, and Onions" 
          price="Price- $11.5" 
          isSoldOut={false} 
        />
        <Pizza 
          image="margherita.jpg" 
          name="Margherita Pizza" 
          description="Tomato, and mozzarella" 
          price="Pride - $7.5" 
          isSoldOut={false} 
        />
        <Pizza 
          image="spinaci.jpg" 
          name="Spinaci Pizza" 
          description="Tomato, mozzarella, Spinach, and ricotta cheese" 
          price="Price- $8" 
          isSoldOut={false} 
        />
        <Pizza 
          image="prosciutto.jpg" 
          name="Prosciutto Pizza" 
          description="Tomato, mozzarella, Ham, Arugula, and burrata cheese" 
          price="Price- $13" 
          isSoldOut={true} 
        />
        <Pizza 
          image="salamino.jpg" 
          name="Salamino Pizza" 
          description="Tomato, mozzarella, and pepperoni" 
          price="Price- $9.5" 
          isSoldOut={false} 
        />
      </div>
    </div>
  );
}

function Header() {
  return <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Yan Kai's Pizza Cafe</h1>;
}

function Subheader() {
  const currentHour = new Date().getHours();
  if (currentHour < 10 || currentHour > 22) {
    return null; 
  }

  return (
    <footer className="footer">
      <h2 style= {{fontSize: "30px"}}>Authentic Italian Cuisine</h2>
    </footer>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  return (
    <footer className="footer">
      <p>
        {currentHour >= 10 && currentHour <= 22
          ? "We're currently open"
          : "Sorry we're closed"}
      </p>
    </footer>
  );
}

function Order() {
  return <button id="btn">Order Here!</button>
}

function Pizza({ image, name, description, price, isSoldOut }) {
  return (
    <div className={`pizza ${isSoldOut ? "sold-out" : ""}`}>
      <img src={image} className="card-img-top" alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      {isSoldOut 
        ? <p id="soldout" className="sold-out-text">Sorry, this pizza is sold out!</p>
        : <p  id="soldout" className="available-text">Pizza Available!</p>}
    </div>
  );
}


function App() {
  return (
    <div className="container">
      <Header />
      <Subheader />
      <Menu />
      <Order />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

