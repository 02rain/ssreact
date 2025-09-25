import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { squadMembers } from "./characters";
import "../styles/styles.css";

export default function Login() {
  const { login, isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(username ? `Welcome, ${username}` : "Sign in");
  }, [username]);

  useEffect(() => {
    if (isLoggedIn && user?.characterSlug) {
      navigate(`/characters/${user.characterSlug}`);
    }
  }, [isLoggedIn, user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = squadMembers.find((m) => m.username.toLowerCase() === username.toLowerCase());

    if (!selected) {
      setError("Enter a valid character username.");
      return;
    }

    const isValid =
      username.toLowerCase() === selected.username.toLowerCase() &&
      password === selected.password;

    if (!isValid) {
      setError("Invalid credentials for that character.");
      return;
    }

    login(username, selected.slug);
    navigate(`/characters/${selected.slug}`);
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

              {/* character selection removed; login by username/password only */}

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
