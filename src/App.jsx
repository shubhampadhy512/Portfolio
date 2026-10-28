import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./compnent/NavBar.jsx";
import Footer from "./compnent/Footer.jsx";

function App() {
  
  return (
    <div className="root">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
