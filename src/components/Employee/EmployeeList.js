import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div style={styles.employeeListContainer}>
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/employee-list" style={styles.navLink}>Employee List</Link>
          <div style={styles.userInfo}>Hukum Gupta - <span style={styles.logout}>Logout</span></div>
        </nav>
      </header>
      <div style={styles.employeeListContent}>
        <h1>Employee List</h1>
        <div style={styles.employeeListActions}>
          <p>Total Count: {employees.length}</p>
          <Link to="/create-employee" style={styles.createBtn}>Create Employee</Link>
          <input type="text" style={styles.searchBox} placeholder="Enter Search Keyword" />
        </div>
        <table style={styles.employeeTable}>
          <thead>
            <tr>
              <th>Unique Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={employee.image} alt="profile" style={styles.employeeImage} /></td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.designation}</td>
                <td>{employee.gender}</td>
                <td>{employee.course}</td>
                <td>{employee.createDate}</td>
                <td>
                  <button onClick={() => handleDelete(index)} style={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  employeeListContainer: {
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
  employeeListContent: {
    marginTop: '20px',
  },
  employeeListActions: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createBtn: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
  },
  searchBox: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  employeeTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  employeeImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EmployeeListPage;
