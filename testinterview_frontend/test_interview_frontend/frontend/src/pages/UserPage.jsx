import React, {useState} from 'react';
import {Button, Card} from 'antd';
import './UserPage.css';
import axios from 'axios';

function UserPage() {
  const [button1Clicks, setButton1Clicks] = useState(0);
  const [button2Clicks, setButton2Clicks] = useState(0);

  const handleButton1Click = async () => {
    setButton1Clicks(button1Clicks + 1);
    // Enviar el registro al backend
    const time = new Date().getTime(); // Obtenemos el tiempo actual en milisegundos
    const token = localStorage.getItem('token'); // Obtenemos el token de autenticación del almacenamiento local
    await axios.post('http://localhost:3000/api/buttonClicked', { button: 1, time: time }, { headers: { Authorization: `Bearer ${token}` }});
  };

  const handleButton2Click = async () => {
    setButton2Clicks(button2Clicks + 1);
    // Enviar el registro al backend
    const time = new Date().getTime(); // Obtenemos el tiempo actual en milisegundos
    const token = localStorage.getItem('token'); // Obtenemos el token de autenticación del almacenamiento local
    await axios.post('http://localhost:3000/api/buttonClicked', { button: 2, time: time }, { headers: { Authorization: `Bearer ${token}` }});
  };
  const handleLogoutClick = async () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div className="user-page">
      <div className="log-out">
      <Button style={{width:"4rem"}} type="primary" onClick={handleLogoutClick}>Logout</Button>
      </div>
      <Card title="Welcome" className="card">
        <p className="card-text">You can click the buttons below:</p>
        <div className="button-container">
          <Button type="primary" onClick={handleButton1Click}>Button 1 ({button1Clicks})</Button>
          <Button type="primary" onClick={handleButton2Click}>Button 2 ({button2Clicks})</Button>
        </div>
      </Card>
    </div>
  );
}

export default UserPage;
