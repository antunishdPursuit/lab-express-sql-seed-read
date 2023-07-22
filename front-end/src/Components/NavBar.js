import { Link } from "react-router-dom";

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/songs">Song App</Link>
        <span className="navbar-text">
        <Link className="navbar-link" to="/songs/new">New Song</Link>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
  