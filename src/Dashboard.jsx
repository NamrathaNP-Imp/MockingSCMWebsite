// import { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = ({userName}) => {
//   const [activeNav, setActiveNav] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [userName, setUserName] = useState("Nishi");

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const navItems = [
//     { id: "dashboard", label: "Dashboard", icon: "📊" },
//     { id: "users", label: "Users", icon: "👥" },
//     { id: "analytics", label: "Analytics", icon: "📈" },
//     { id: "reports", label: "Reports", icon: "📋" },
//     { id: "settings", label: "Settings", icon: "⚙️" },
//     { id: "profile", label: "Profile", icon: "👤" },
//     { id: "billing", label: "Billing", icon: "💳" },
//     { id: "support", label: "Support", icon: "🆘" },
//     { id: "logout", label: "Logout", icon: "🚪" },
//   ];

//   return (
//     <div className="dashboard" id="dashboard">
//       {/* Enhanced Sidebar */}
//       <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <div className="logo">
//             <div className="logo-icon">🌈</div>
//             <h2>IRIS Portal</h2>
//           </div>
//           <button className="sidebar-close" onClick={toggleSidebar}>
//             ×
//           </button>
//         </div>

//         <div className="sidebar-search">
//           <input type="text" placeholder="Search..." className="search-input" />
//         </div>

//         <div className="nav-section">
//           <h3>Main</h3>
//           <div className="nav-list">
//             {navItems.slice(0, 5).map((item) => (
//               <a
//                 key={item.id}
//                 className={`nav-item ${activeNav === item.id ? "active" : ""}`}
//                 onClick={() => {
//                   setActiveNav(item.id);
//                   if (window.innerWidth < 1024) setIsSidebarOpen(false);
//                 }}
//               >
//                 <span className="nav-icon">{item.icon}</span>
//                 <span className="nav-label">{item.label}</span>
//                 <span className="nav-arrow">›</span>
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="nav-section">
//           <h3>Account</h3>
//           <div className="nav-list">
//             {navItems.slice(5).map((item) => (
//               <a
//                 key={item.id}
//                 className={`nav-item ${activeNav === item.id ? "active" : ""}`}
//                 onClick={() => {
//                   setActiveNav(item.id);
//                   if (window.innerWidth < 1024) setIsSidebarOpen(false);
//                 }}
//               >
//                 <span className="nav-icon">{item.icon}</span>
//                 <span className="nav-label">{item.label}</span>
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="sidebar-footer">
//           <div className="user-profile">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/026/641/257/original/user-icon-in-flat-style-person-icon-user-icon-for-web-site-user-icon-illustration-vector.jpg"
//               alt={userName}
//               className="user-avatar"
//             />
//             <div>
//               <div className="user-name">{userName}</div>
//               <div className="user-role">Frontend Developer</div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
//         <header className="topbar">
//           <button className="menu-toggle" onClick={toggleSidebar}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//           <div className="header-right">
//             <div className="notifications">🔔</div>
//             <div className="user-info">
//               <span>Welcome, {userName}!</span>
//               <div className="user-avatar-small">ND</div>
//             </div>
//           </div>
//         </header>

//         <main className="main">
//           <div className="hero-section">
//             <div className="hero-text">
//               <h1>Good Morning, {userName}! 👋</h1>
//               <p>Here's what's happening with your IRIS account today.</p>
//             </div>
//             <div className="quick-actions">
//               <button className="action-btn primary">New Project</button>
//               <button className="action-btn">Export Data</button>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="stats-grid">
//             <div className="stat-card gradient">
//               <div className="stat-icon">👥</div>
//               <div className="stat-content">
//                 <div className="stat-value">1,234</div>
//                 <div className="stat-label">Total Users</div>
//               </div>
//             </div>
//             <div className="stat-card gradient success">
//               <div className="stat-icon">📈</div>
//               <div className="stat-content">
//                 <div className="stat-value">+24%</div>
//                 <div className="stat-label">Monthly Growth</div>
//               </div>
//             </div>
//             <div className="stat-card gradient warning">
//               <div className="stat-icon">🔴</div>
//               <div className="stat-content">
//                 <div className="stat-value">456</div>
//                 <div className="stat-label">Active Sessions</div>
//               </div>
//             </div>
//             <div className="stat-card gradient danger">
//               <div className="stat-icon">⚠️</div>
//               <div className="stat-content">
//                 <div className="stat-value">12</div>
//                 <div className="stat-label">Pending Alerts</div>
//               </div>
//             </div>
//           </div>

//           <div className="content-grid">
//             <div className="content-main">
//               <div className="content-main">
//                 {/* Pure CSS Dummy Chart */}
//                 <div className="dummy-chart-container">
//                   <div className="chart-header">
//                     <h3>User Growth Analytics</h3>
//                     <div className="chart-legend">
//                       <span className="legend-item active">
//                         <div className="legend-color blue"></div>
//                         Active Users
//                       </span>
//                       <span className="legend-item">
//                         <div className="legend-color green"></div>
//                         New Registrations
//                       </span>
//                     </div>
//                   </div>

//                   <div className="dummy-chart">
//                     {/* X-axis labels */}
//                     <div className="x-axis">
//                       <span>Jan</span>
//                       <span>Feb</span>
//                       <span>Mar</span>
//                       <span>Apr</span>
//                       <span>May</span>
//                       <span>Jun</span>
//                     </div>

//                     {/* Bars */}
//                     <div className="bars-container">
//                       <div className="bar-group">
//                         <div
//                           className="bar blue"
//                           style={{ height: "65%" }}
//                         ></div>
//                         <div
//                           className="bar green"
//                           style={{ height: "45%" }}
//                         ></div>
//                       </div>
//                       <div className="bar-group">
//                         <div
//                           className="bar blue"
//                           style={{ height: "85%" }}
//                         ></div>
//                         <div
//                           className="bar green"
//                           style={{ height: "65%" }}
//                         ></div>
//                       </div>
//                       <div className="bar-group">
//                         <div
//                           className="bar blue"
//                           style={{ height: "100%" }}
//                         ></div>
//                         <div
//                           className="bar green"
//                           style={{ height: "95%" }}
//                         ></div>
//                       </div>
//                       <div className="bar-group">
//                         <div
//                           className="bar blue"
//                           style={{ height: "80%" }}
//                         ></div>
//                         <div
//                           className="bar green"
//                           style={{ height: "60%" }}
//                         ></div>
//                       </div>
//                       <div className="bar-group">
//                         <div
//                           className="bar blue"
//                           style={{ height: "95%" }}
//                         ></div>
//                         <div
//                           className="bar green"
//                           style={{ height: "80%" }}
//                         ></div>
//                       </div>
//                       <div className="bar-group">
//                         <div
//                           className="bar blue"
//                           style={{ height: "100%" }}
//                         ></div>
//                         <div
//                           className="bar green"
//                           style={{ height: "90%" }}
//                         ></div>
//                       </div>
//                     </div>

//                     {/* Y-axis */}
//                     <div className="y-axis">
//                       <span>6000</span>
//                       <span>5000</span>
//                       <span>4000</span>
//                       <span>3000</span>
//                       <span>2000</span>
//                       <span>1000</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="content-sidebar">
//               <div className="widget recent-activity">
//                 <div className="widget-header">
//                   <h3>Recent Activity</h3>
//                   <span className="view-all">View all →</span>
//                 </div>
//                 <div className="activity-list">
//                   <div className="activity-item">
//                     <span className="activity-icon">✅</span>
//                     <span>New user registered</span>
//                     <small>2 min ago</small>
//                   </div>
//                   <div className="activity-item">
//                     <span className="activity-icon">🔐</span>
//                     <span>Login successful</span>
//                     <small>5 min ago</small>
//                   </div>
//                   <div className="activity-item">
//                     <span className="activity-icon">🔄</span>
//                     <span>Session renewed</span>
//                     <small>1 hour ago</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";

export default function SignedInDashboard({ user, onBack }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>✅ Successfully Signed In</h2>

        <p style={styles.subtitle}>
          Welcome to your dashboard
        </p>

        <div style={styles.userBox}>
          <strong>User:</strong>
          <span style={styles.userText}>{user}</span>
        </div>

        <button style={styles.button} onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f7fb",
    fontFamily: "Arial"
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "350px"
  },
  title: {
    color: "#2e7d32",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#555",
    marginBottom: "20px"
  },
  userBox: {
    background: "#f1f4f8",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "25px"
  },
  userText: {
    display: "block",
    marginTop: "5px",
    color: "#333"
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer"
  }
};