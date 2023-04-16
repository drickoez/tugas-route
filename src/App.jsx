import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Belajar React Router</h1>

      <nav>
        <Link to="/home" className="mr">
          Home
        </Link>
        <Link to="/about" className="mr">
          About
        </Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
