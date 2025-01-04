import "./App.css";

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
];

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
        <li style={{ listStyleType: "none" }}>{dish}</li>
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
    <Main dishes={items} />
  </div>
  );
}

export default App;