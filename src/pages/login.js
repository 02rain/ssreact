import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import "../styles/styles.css";

export default function Login() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const realUsername = "Admin";
  const realPassword = "Nigga1234!";

  useEffect(() => {
    setTitle(username ? `Welcome, ${username}` : "Sign in");
  }, [username]);

  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === realUsername && password === realPassword) {
      login(username);
      navigate("/home");
    } else {
      setError("Invalid credentials. Try Admin / Nigga1234!");
    }
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <div className="login-page-flex">
        <div className="login-left">
          <h1 className="login-title">{title}</h1>
        </div>
        <div className="login-right">
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                className="login-input"
                onChange={(e) => setUsername(e.target.value)}
                required
                maxLength={20}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                className="login-input"
                onChange={(e) => setPassword(e.target.value)}
                required
                maxLength={20}
              />

              {error && (
                <div style={{ color: "#ff7aa2", marginBottom: "10px" }}>
                  {error}
                </div>
              )}

              <button type="submit" className="login-button">
                Sign In
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="login-button"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
