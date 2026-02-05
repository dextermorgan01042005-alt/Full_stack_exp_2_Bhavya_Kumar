function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100">
      <h4>Admin Panel</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">Dashboard</li>
        <li className="nav-item">Users</li>
        <li className="nav-item">Reports</li>
        <li className="nav-item">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
