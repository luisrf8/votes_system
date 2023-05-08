import "./LoginPage.css";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:3000/api/authenticate", { username, password })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        if (response.data.is_admin) {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch((error) => {
        message.error("Login failed. Please try again.");
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <Form onFinish={handleSubmit} style={{ width: 600 }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username." }]}
        >
          <Input
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password." }]}
        >
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
