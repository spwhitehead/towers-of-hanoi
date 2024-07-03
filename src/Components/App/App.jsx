import "./App.css"
import Game from "../Game/Game"
function App({disks}) {

  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
      </header>
      <div className="container">
        <Game />
      </div>
      <footer>
        <p>Created by Spencer Whitehead. Copyright 2024.</p>
      </footer>
    </>
  );
}

export default App
