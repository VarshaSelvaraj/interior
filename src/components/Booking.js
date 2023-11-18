import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Booking.css';

const BookingForm = () => {
  const navigate = useNavigate();

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    fullHome: false,
    kitchen: false,
    bedroom: false,
    wardrobe: false,
    balcony: false,
    packagePreference: 'essential',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (type === 'checkbox') {
        // Handle checkboxes
        return {
          ...prevData,
          [name]: checked,
        };
      } else if (type === 'radio') {
        return {
          ...prevData,
          packagePreference: value,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Assuming you have an API endpoint for saving the booking data
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
    try {
      const response = await fetch('/makeBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Booking successful
        Swal.fire({
          title: 'Booking Successful!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Navigate to the home page after SweetAlert is closed
          navigate('/homePage');
        });
      } else {
        // Booking failed
        Swal.fire({
          title: 'Booking Failed',
          text: 'An error occurred during booking. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  const s = {
    color: '#644860',
    padding: '0px',
  };

  return (
    <div className="booking-container">
      <div className="image-container">
        <img
          src="https://www.iiad.edu.in/wp-content/uploads/2022/06/image3-6-576x1024.webp"
          alt="Interior Design"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="booking-form">
        <h3 style={{ color: '#644860' }}>Interior Design Booking</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={s}>
              Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email" style={s}>
              Email
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone" style={s}>
              Phone
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <label style={s}>Requirements</label>
          <div className="form-check">
            <br />
            <input
              type="checkbox"
              id="fullHome"
              name="fullHome"
              className="form-check-input"
              checked={formData.fullHome}
              onChange={handleChange}
            />
            <label htmlFor="fullHome" className="form-check-label" style={s}>
              &emsp;Full Home
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="kitchen"
              name="kitchen"
              className="form-check-input"
              checked={formData.kitchen}
              onChange={handleChange}
            />
            <label htmlFor="kitchen" className="form-check-label" style={s}>
              &emsp;Kitchen
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="bedroom"
              name="bedroom"
              className="form-check-input"
              checked={formData.bedroom}
              onChange={handleChange}
            />
            <label htmlFor="bedroom" className="form-check-label" style={s}>
              &emsp;Bedroom
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="wardrobe"
              name="wardrobe"
              className="form-check-input"
              checked={formData.wardrobe}
              onChange={handleChange}
            />
            <label htmlFor="wardrobe" className="form-check-label" style={s}>
              &emsp;Wardrobe
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="balcony"
              name="balcony"
              className="form-check-input"
              checked={formData.balcony}
              onChange={handleChange}
            />
            <label htmlFor="balcony" className="form-check-label" style={s}>
              &emsp;Balcony
            </label>
          </div>
          <br />

          <label style={s}>Package Preference</label>
          <div className="form-check">
            <br />
            <input
              type="radio"
              id="essential"
              name="packagePreference"
              value="essential"
              className="form-check-input"
              checked={formData.packagePreference === 'essential'}
              onChange={handleChange}
            />
            <label htmlFor="essential" className="form-check-label" style={s}>
              &emsp;Essential
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="premium"
              name="packagePreference"
              value="premium"
              className="form-check-input"
              checked={formData.packagePreference === 'premium'}
              onChange={handleChange}
            />
            <label htmlFor="premium" className="form-check-label" style={s}>
              &emsp;Premium
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="luxury"
              name="packagePreference"
              value="luxury"
              className="form-check-input"
              checked={formData.packagePreference === 'luxury'}
              onChange={handleChange}
            />
            <label htmlFor="luxury" className="form-check-label" style={s}>
              &emsp;Luxury
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="custom"
              name="packagePreference"
              value="custom"
              className="form-check-input"
              checked={formData.packagePreference === 'custom'}
              onChange={handleChange}
            />
            <label htmlFor="custom" className="form-check-label" style={s}>
              &emsp;Custom
            </label>
          </div>
          <br />

          <button className="book-btn">Make Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
