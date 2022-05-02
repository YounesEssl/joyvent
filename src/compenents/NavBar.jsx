import "./NavBar.css";
import { Link } from "react-router-dom";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div id="container">
      <nav>
        <ul className="liste">
          <li className="items"><Link to="/">Home</Link></li>
          <li className="items"><Link to="/eventlist">Events List</Link></li>
          <li className="items">Map</li>
          <li className="items">Profil</li>
        </ul>
      </nav>
    </div>
  );
}
