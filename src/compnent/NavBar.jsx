import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NameLogo = `${process.env.PUBLIC_URL}/namelogo.png`;

function NavBar() {

  return (
    <div className="body">
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo-image" src={NameLogo} alt="" />
          <div className="logo">Shubham Padhy</div>
        </div>
        <div className="link-container">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;