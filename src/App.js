import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = "Tommy Biasa";
  const userJsx = <strong>Tommy JSX dong</strong>;
  //JSX JavaScript XML bisa mengabungkan tag html

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        {user} - {userJsx}
      </header>
    </div>
  );
}

export default App;
