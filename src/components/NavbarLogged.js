import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import './Navbar.css';

function NavigationBarLogged() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://interior-back.onrender.com/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  

  return (
    <nav>
      <ul className="nav-bar">
        <div className="logo">
          <span className="brand-name" style={{fontSize:"14px"}}>L U X E N E S T</span >
        </div>
        <div className="right-corner">
          <li><Link to="/homeLog">Home</Link></li>
          <li><Link to="/designLog">Designs</Link></li>
          
          <li>Hi,{user && (
        <span className="user-username">{user.username}</span>
      )}</li>
    <Link to="/booking" className="but"><button>Book here</button></Link>
      <li><Link to="/homePage"> <FontAwesomeIcon icon={faSignOutAlt} /></Link></li>
             
          
        </div>
      </ul>
    </nav>
  );
}

export default NavigationBarLogged;
