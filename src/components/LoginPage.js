import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/coachlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
       
        Swal.fire('Login Successful', '', 'success');
        navigate('/homeLog');
      } else {
        Swal.fire('Invalid username or password', '', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className='log'>
    
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <h2 style={{ color: " #644860" }}>Sign In</h2>
            <p>“Way to pretty homes!”</p>
            <form onSubmit={handleLogin}>
              <div className="form-groupLog">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-groupLog">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" style={{ backgroundColor: " #644860" }}>Login</button><br /><br />
              Don't have an account? <Link to='/signup' style={{ color: " #644860", textDecoration: "none", fontSize: "14px" }}>Create a new account</Link>
            </form>
          </div>
          <div className="login-image">
            <img src="https://www.brabbu.com/en/inspiration-and-ideas/wp-content/uploads/2017/07/6-Chic-Decorating-Ideas-To-Take-From-BRABBU%E2%80%99s-Projects-In-France-552x820.jpg" alt="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
