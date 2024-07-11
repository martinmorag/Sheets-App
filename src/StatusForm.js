import React, { useState } from 'react';
import axios from 'axios';
import './StatusForm.css';

const StatusForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedStatus = status.trim();
    console.log('Submitting with email:', trimmedEmail, 'and status:', trimmedStatus); // Log submitted data

    try {
      const response = await axios.post('http://localhost:5000/update-status', { email: trimmedEmail, status: trimmedStatus });
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
        <label className='label'>
          Email:
          <input type="text" className='input' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <br />
        <label className='label'>
          Estado:
          <select value={status} className='input' onChange={(e) => setStatus(e.target.value)}>
            <option value="" disabled>Seleccione un estado</option>
            <option value="Contactado">Contactado</option>
            <option value="Esperando respuesta">Esperando respuesta</option>
            <option value="En llamada">En llamada</option>
            <option value="Win">Win</option>
            <option value="Lose">Lose</option>
          </select>
        </label>
        <br />
        <button type="submit" className='SubmitBtn'>Actualizar</button>
      </form>
    </div>
  );
};

export default StatusForm;