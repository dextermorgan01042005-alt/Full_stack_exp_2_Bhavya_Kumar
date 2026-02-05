function Navbar({ toggleTheme }) {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <h5>Dashboard</h5>
      <button onClick={toggleTheme} className="btn btn-secondary">
        Toggle Mode
      </button>
    </nav>
  );
}

export default Navbar;
