import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/employee-list" style={styles.navLink}>Employee List</Link>
          <div style={styles.userInfo}>Hukum Gupta - <span style={styles.logout}>Logout</span></div>
        </nav>
      </header>
      <div style={styles.dashboardContent}>
        <h1>Welcome to the Admin Dashboard</h1>
        <nav style={styles.dashboardLinks}>
          <Link to="/employee-list" style={styles.link}>Employee List</Link>
          <Link to="/create-employee" style={styles.link}>Create Employee</Link>
        </nav>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fc',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
  },
  userInfo: {
    fontSize: '16px',
  },
  logout: {
    color: 'red',
    cursor: 'pointer',
  },
  dashboardContent: {
    marginTop: '20px',
    textAlign: 'center',
  },
  dashboardLinks: {
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#0066cc',
    fontSize: '18px',
    margin: '0 15px',
  },
};

export default DashboardPage;
