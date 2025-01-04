import "./App.css";

function Header({name, year}) {
  // console.log(props);
  return (
    <div>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </div>
  );
}

function App() {
  return (
  <div>
    <Header name="Emir" year="2023"/>
    <Header name="Amir" year="2024"/>
    <Header name="Ali" year={new Date().getFullYear()}/>
    <main>
      <h2>Lorem IPSUM</h2>
    </main>
  </div>
  );
}

export default App;