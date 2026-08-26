import logo from "./logo.svg";
import "./App.css";

function App() {
  const miArray = () => {
    const numerosArray = [
      { id: 1, numero: 26 },
      { id: 2, numero: 8 },
      { id: 3, numero: 11 },
      { id: 4, numero: 13 },
      { id: 5, numero: 20 },
    ];
    return (
      <p>
        {numerosArray.map((item) => {
          return <span key={item.id}>{item.id + "-" + item.numero}&nbsp;</span>;
        })}
      </p>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Números del Array</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
