import "./App.css";

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));
// console.log(dishObjects);

function Header({name, year}) {
  // console.log(props);
  return (
    <div>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </div>
  );
}

function Main ({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
  <div>
    <Header name="Emir" year="2023"/>
    <Header name="Amir" year="2024"/>
    <Header name="Ali" year={new Date().getFullYear()}/>
    <Main dishes={dishObjects} />
  </div>
  );
}

export default App;