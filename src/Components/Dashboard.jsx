import { useState } from "react";

function Dashboard() {

  const [active, setActive] = useState("Users");

  const data = {
    Users: ["Raju", "Aman", "Neha", "Priya"],
    Sales: ["₹12,000 Today", "₹85,000 This Week"],
    Orders: ["Order #1023", "Order #1024", "Order #1025"],
    Revenue: ["January: ₹2,50,000", "February: ₹3,10,000"]
  };

  return (
    <div className="dashboard">

      {/* CARDS */}
      <div className="card-grid">

        {Object.keys(data).map((item) => (
          <div
            key={item}
            className={
              active === item
                ? "dashboard-card active-card"
                : "dashboard-card"
            }
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}

      </div>

      {/* CONTENT AREA */}
      <div className="content-area">

        <h3>{active} Data</h3>

        <ul>
          {data[active].map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default Dashboard;
