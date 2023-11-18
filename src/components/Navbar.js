import { Link } from 'react-router-dom';

import './Navbar.css';

function NavigationBar() {
  

  return (
    <nav>
      <ul className="nav-bar">
        <div className="logo">
          <span className="brand-name" style={{fontSize:"14px"}}>L U X E N E S T</span >
        </div>
        <div className="right-corner">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/design">Designs</Link></li>
          <li><Link to="/magazine">Magazine</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
             <li> <Link to="/signup">Sign Up</Link></li>
          
        </div>
      </ul>
    </nav>
  );
}

export default NavigationBar;
