import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import {Button} from 'antd';

import axios from 'axios';
import { Column, Bar, Pie } from "@ant-design/plots";
import "./AdminPage.css";
function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [button1Count, setButton1Count] = useState(0);
  const [button2Count, setButton2Count] = useState(0);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/admin', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
      .then(response => {
        setButton1Count(response.data.button1ClickedCount);
        setButton2Count(response.data.button2ClickedCount);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/users', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Button 1 Count',
      dataIndex: 'button1Count',
      key: 'button1Count'
    },
    {
      title: 'Button 2 Count',
      dataIndex: 'button2Count',
      key: 'button2Count'
    }
  ];

  const data = [
    {
      type: "Boton 1",
      sales: button1Count,
    },
    {
      type: "Boton 2",
      sales: button2Count,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Cicks",
      },
      sales: {
        alias: "Clicks",
      },
    },
  };
  const configBar = {
    data,
    xField: "sales",
    yField: "type",
    seriesField: "type",
    legend: {
      position: "top-left",
    },
  };
  const configCake = {
    appendPadding: 10,
    data,
    angleField: "sales",
    colorField: "type",
    radius: 0.8,
    legend: false,
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        fill: "#fff",
        fontSize: 18,
        textAlign: "center",
      },
    },
  };
  const handleLogoutClick = async () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div className="admin-page">
      <div className="log-out">
      <Button style={{width:"4rem"}} type="primary" onClick={handleLogoutClick}>Logout</Button>
      </div>
      <h1>User List</h1>
      {loading ? (
      <Spin size="large" />
    ) : (
      <Table dataSource={users} columns={columns} />
    )}
    <div className="stadistic">
      <Bar {...configBar} />
      <Pie {...configCake} />
      <Column {...config} />
    </div>
    </div>
  );
}

export default AdminPage;
