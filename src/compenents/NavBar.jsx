import "./NavBar.css";

export default function Navigation() {
  return (
    <div id="container">
      <nav>
        <ul className="liste">
          <li className="items">Home</li>
          <li className="items">Events List</li>
          <li className="items">Map</li>
          <li className="items">Profil</li>
        </ul>
      </nav>
    </div>
  );
}
