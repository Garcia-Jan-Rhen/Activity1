import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Header() {
  const tabs = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/education', label: 'Education' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        <h1>My Portfolio</h1>
        <nav className="nav-links">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}