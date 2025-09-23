import "./App.css";
import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import Nav from "./nav";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import ErrorPage from "./pages/error";
import Characters from "./pages/characters";
import CharacterProfile from "./pages/characterProfile";

// ------------------ Auth Context ------------------ //
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { username, characterSlug }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, characterSlug) => {
    setUser({ username, characterSlug });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Layout that includes the navbar on its child pages
const NavBarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

// ------------------ App ------------------ //
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public route for login without navbar */}
          <Route path="/login" element={<Login />} />

          {/* Routes with Navbar */}
          <Route element={<NavBarLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:slug" element={<CharacterProfile />} />
            <Route path="/about" element={<About />} />
            {/* Catch-all: show error page or redirect */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
