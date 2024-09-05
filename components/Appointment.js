import React, { useState } from 'react';
import axios from 'axios';

function Appointment() {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  
  const handleBooking = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/book', { name, date });
      alert(response.data.message);
    } catch (error) {
      console.error('Error booking appointment', error);
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default Appointment;
