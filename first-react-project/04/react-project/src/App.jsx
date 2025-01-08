// import React from "react";
import { useState, useReducer } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));
// console.log(dishObjects);

function Header({ name, year }) {
  // console.log(props);
  return (
    <div>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </div>
  );
}

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <p>
          Click the button to change the status of the restaurant from Main
          Function (Child Level Function).
        </p>
        <button onClick={() => onStatus(openStatus ? false : true)}>
          I Want The Restaurant to be {openStatus ? "Open" : "Closed"}.
        </button>
        <h2>
          Welcome to this beautiful restaurant! currently{" "}
          {openStatus ? "Open" : "Closed"}.
        </h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true);

  // const [status, setStatus] = useState("Open");
  // console.log(status);

  return (
    <div>
      {/*
      <h1>The restaurant is currently {status}</h1>
      <button onClick={() => setStatus("Open")}>Open Restaurant</button>
      <button onClick={() => setStatus("Closed")}>Close Restaurant</button>
      */}

      <p>
        Click the button to change the status of the restaurant from App
        Function (Highest Level Function).
      </p>
      <h1>The restaurant is currently {status ? "Open" : "Closed"}.</h1>
      
      {/*
      <button onClick={() => setStatus(!status)}>
        {!status ? "Open" : "Close"} Restaurant
      </button>
      */}

      <button onClick={toggle}>
        {!status ? "Open" : "Close"} Restaurant
      </button>
      <Header name="Emir" year="2023" />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
      <Header name="Amir" year="2024" />
      <Header name="Ali" year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
