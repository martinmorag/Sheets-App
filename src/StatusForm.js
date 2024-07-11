import React, { useState } from 'react';
import axios from 'axios';
import './StatusForm.css';

const StatusForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting with email:', email, 'and status:', status); // Log submitted data
    try {
      const response = await axios.post('http://localhost:5000/update-status', { email, status });
      console.log('Response:', response.data);
      alert('Estado actualizado correctamente');
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Error updating status');
    }
  };
  

  return (
    <div className='status'>
      <h1>Actualizar Estado</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Estado:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Contactado">Contactado</option>
            <option value="Esperando respuesta">Esperando respuesta</option>
            <option value="En llamada">En llamada</option>
            <option value="Win">Win</option>
            <option value="Lose">Lose</option>
          </select>
        </label>
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default StatusForm;