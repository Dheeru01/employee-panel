import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/Employee/EmployeeList';
import CreateEmployee from './components/Employee/CreateEmployee';
import EditEmployee from './components/Employee/EditEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" element={<CreateEmployee />} />
        <Route path="/employees/:id/edit" element={<EditEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
