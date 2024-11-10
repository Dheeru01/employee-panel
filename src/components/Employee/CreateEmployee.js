import React, { useState } from 'react';
import axios from 'axios';

function CreateEmployee() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/employees', formData);
    alert('Employee created');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="Mobile" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
      <select onChange={(e) => setFormData({ ...formData, designation: e.target.value })}>
        <option value="">Select Designation</option>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateEmployee;
