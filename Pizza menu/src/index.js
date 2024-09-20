import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    // const style = {
    //     color: "red",
    //     fontSize: "40px",
    //     textTransform: "uppercase",
    // };
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>;
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    //const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {/* Conditional && AND operator */}
            {/* {numPizzas > 0 && (
                <ul className="pizzas">
                    {pizzas.map((p1) => (
                        <Pizza pizzaObj={p1} key={p1.name} />
                        // <Pizza name={p1.name} photoName={p1.photoName} /> // one way
                    ))}
                </ul>
            )} */}

            {/* Ternary operator */}
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((p1) => (
                            <Pizza pizzaObj={p1} key={p1.name} />
                            // <Pizza name={p1.name} photoName={p1.photoName} /> // one way
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on menu. Please come back later:</p>
            )}

            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            /> */}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    //console.log(pizzaObj);
    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    console.log(`Hours: ${hour}`);
    const openHour = 10;
    const closeHour = 19;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("Shop is open");
    // else alert("shop is Close");

    // if (!isOpen) return <p>we are close</p>;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to come between {openHour}:00 and {closeHour}:00
                </p>
            )}
            {/* {new Date().toLocaleTimeString()} We're currently open! */}
        </footer>
    );
}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We are open from {openHour}:00 to {closeHour}:00. Come Visit us
                or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
