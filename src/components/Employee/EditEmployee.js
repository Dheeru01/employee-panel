import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditEmployee() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`/api/employees/${id}`);
      setFormData(res.data);
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/employees/${id}`, formData);
    alert('Employee updated');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
      <select value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })}>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditEmployee;
