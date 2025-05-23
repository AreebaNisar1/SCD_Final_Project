import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/authpages/ForgotPassword.css"; // Ensure this path matches where you place your ForgotPassword.css
import axios from "axios";
import "../../Styles/responsive.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/forgot-password", { email })
      .then((result) => {
        console.log(result.data);
        if (result.data !== "Incorrect email") {
          alert("OTP successfully sent to your Email");
          navigate("/verification", {
            state: { email: email },
          });
        }
      })
      .catch((err) => alert("An error occurred. Please try again."));
  };

  return (
    <div className="forgot-password-container">
      <div className="logo">
        <img
          src="https://www.realproperty.pk/assets/4eda390c/rp-whit-n-green-logo.png"
          alt="RealProperty Logo"
        />
      </div>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Forgot Password</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="full-width"
          required
        />
        <button type="submit">Submit</button>
        <p className="login-prompt">
          Remember your password?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
