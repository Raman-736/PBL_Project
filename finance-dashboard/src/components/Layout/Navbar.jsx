import React from 'react';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">FinancePro</div>
      <div className="nav-profile">
        {/* Profile icon to go to portfolio page */}
        <div className="profile-icon">👤</div> 
      </div>
    </nav>
  );
};

export default Navbar;