import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import './Magazine.css';

function Magazine() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const cardData = [
    {
      image: 'https://images.livspace-cdn.com/w:400/h:164/dpr:2/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/09/30082327/small-pooja-room-designs-for-home.jpg',
      title: '12 Interesting Pooja Room Door Designs to Style Your Mandir With',
      description: 'From wood to glass, here are some of the best pooja room door designs for Indian homes that you don’t want to miss',
    },
    {
      image: 'https://images.livspace-cdn.com/w:400/h:164/dpr:2/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/11/22134437/Cover-6.jpg',
      title: '8 Must-Have and Useful Modular Kitchen Accessories That You Need',
      description: 'Cooking doesn’t have to be a chore anymore. Not if you can make your kitchen work harder to save time and effort...',
    },
    {
      image: 'https://images.livspace-cdn.com/w:400/h:164/dpr:2/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/10/03113257/south-facing-house-vastu.jpg',
      title: 'Vastu for South-Facing House: Tips and Remedies for a South-Facing House',
      description: 'Worried about whether your south-facing house has vastu doshas? We’ve got some simple vastu remedies for you to try out.',
    },
    {
      image: 'https://images.livspace-cdn.com/w:400/h:164/dpr:2/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/01/22154103/cover-5.jpg',
      title: 'All About Wardrobe Pricing: How Much Does a Wardrobe Cost?',
      description: 'There are 6 major factors that drive the price of a wardrobe and here’s how you can manage them to get a cupboard that’s within your budget',
    },
  ];

  return (
    <div className='mag'>
      <NavBar />
      <br/><h3 style={{ color:"#644860",fontSize:"30px",lineHeight:"0"}}>&emsp;Happy Homes</h3>
      <p style={{fontSize:"18px"}}><i>&emsp;&emsp;Everything you wanted to know about getting your interiors is right here. Discover the  <br/>&emsp;&emsp;latest home tours, decor ideas, interior design guides, industry insights and more.</i></p>
      <hr style={{color:"#644860"}}/><br/>
      <h3 style={{ color:"#644860",fontSize:"24px",lineHeight:"0"}}>&emsp;&emsp;Popular Stories</h3><br/>
      <div className={`cardm-grid ${scrollPosition > 200 ? 'sweep-in' : ''}`}>
        {cardData.map((card, index) => (
          <div key={index} className="cardm">
            <img src={card.image} alt={card.title} className="cardm-image" />
            <div className="cardm-content">
              <h3 style={{ color:"#644860"}}>{card.title}</h3>
              <p><i>{card.description}</i></p>
            </div>
        </div>
        ))}
      </div><br/><br/>
      <div className={`input-section ${scrollPosition > 400 ? 'sweep-in' : ''}`}>
        <div className="column1">
        <img src="https://interiordesignersinworli.com/wp-content/uploads/2020/02/Before-and-After-DDC.jpg" alt="sorry" className="column-image" />
      </div>
        <div className="column2">
          <h3 style={{ color:"#644860",fontSize:"24px",lineHeight:"0"}}>Renovations</h3>
          <p style={{ color:"grey",fontSize:"16px"}}> New may be beautiful, but old will always be gold! Though older homes have their unique charm, they might not be as functional as modern homes. </p>
          <h3 style={{ color:"#644860",fontSize:"18px"}}>Get a Expert's advice!</h3>
          <div className="form-container">

          <input type="text" placeholder="Name"   className="input-field"/>
          <input type="tel" placeholder="Phone"  className="input-field"/>
          <input type="email" placeholder="Email"  className="input-field"/><br/>
         
          </div>
          <button className="submit-button">Send a request</button>
        </div>
      </div><br/><br/><br/>


      <Footer/>
    </div>
  );
}

export default Magazine;