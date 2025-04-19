// src/components/Layout.jsx
import { Link, useLocation } from 'react-router-dom';
import './css/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="logo">abcourse</div>
        <nav>
          <Link to="/chatbot" className={location.pathname === '/chatbot' ? 'active' : ''}>Chatbot</Link>
          <Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Courses</Link>
        </nav>
        <button className="logout">Log out</button>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
