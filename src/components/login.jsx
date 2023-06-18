import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const users = [
  { name: "Aswin", password: "1234" },
  { name: "John", password: "5678" },
  { name: "Jane", password: "9012" },
];

function Login() {
  const navigate = useNavigate();
  const login = (details) => {
    console.log(details);
    const user = users.find(
      (u) => u.name === details.name && u.password === details.password
    );
    if (user) {
      navigate("/home");
      alert("Login successful");
    } else {
      alert("Invalid Login Credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(details);
  };

  const [details, setDetails] = useState({ name: "", password: "" });
  return (
    <div className="log">
      <div className="image">
        <img
          src="https://www.insfollowup.com/dist/images/tools/name-generator/download-promo.svg"
          width="650"
          alt="NoShow"
        />
      </div>
      <div className="form">
        <img
          src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/instagram-text-logo.png"
          width="100"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username or email"
            required
            name="username"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
