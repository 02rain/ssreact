import { NavLink } from 'react-router-dom';
import { useAuth } from './App';
import "./styles/nav.css";

function Nav() {
  const { user, isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const userGreetingStyles = {
    fontSize: '14px',
    color: '#ffffff',
    fontWeight: '400'
  };

  return (
    <>
      
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand-custom" to="/home">
            SUICIDE SQUAD
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                  } 
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                  } 
                  to="/characters"
                >
                  Characters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                  } 
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">  
                    <span className="navbar-text" style={userGreetingStyles}>
                      Welcome, {user}
                    </span>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link custom-nav-link" to="/login" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => 
                      `nav-link custom-nav-link ${isActive ? 'active' : ''}`
                    } 
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;