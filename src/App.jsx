import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

function App() {

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "bg-dark text-white" : "bg-light text-dark"}>
      <div className="d-flex">
        <Sidebar />

        <div className="flex-grow-1">
          <Navbar toggleTheme={toggleTheme} />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
