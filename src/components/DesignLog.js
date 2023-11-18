import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Design.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer';
import NavigationBarLogged from './NavbarLogged';

function DesignLog() {
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
  const sliderSettings = {
    dots: true, // Show pagination dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto play the slides
    autoplaySpeed: 1000, // Auto play interval in milliseconds
  };

  const sliderData = [
    {
      image: 'https://img.freepik.com/premium-photo/mockup-living-room-interior-with-sofa-empty-pastel-color-wall-background-3d-rendering_41470-4249.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=ais',
      title: 'Where Design Meets Comfort',
     description:'We bring you carefully-curated interior design ideas, to give your home a brand new look. Explore exclusive interior designs and trends that are every bit inspirational as they are practical. ',
      buttonText: 'Explore',
    },
    {
      image: 'https://img.freepik.com/premium-photo/interior-living-room-with-armchair-empty-dark-green-wall-3d-rendering_41470-3505.jpg?w=740',
      title: 'Designing Environments that Tell Your Story    ',
      description:'Our team of interior designers have put together ideas across kitchen, bedroom, living room and more, to help you pick a design that will best suit your home interior requirements.',
      buttonText: 'Learn More',
    },
    {
      image: 'https://img.freepik.com/premium-photo/blue-sofa-with-plant-white-wall-blue-flooring_41470-4731.jpg?w=996',
      title: 'Turning Houses into Homes',
      description:'Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical and trendy. ',
      buttonText: 'Learn More',
    },
    {
      image: 'https://images.adsttc.com/media/images/61b8/d41a/1385/fc65/7ab3/d271/newsletter/six-n-five-studio-renovation-isern-serra-c-salva-lopez.jpg?1639502880',
      title: 'Custom Interiors Crafted Just for You',
      description:'From modular TV units to wall paintings and living room wall designs, you’ll find all the inspiration you’ll need to get started.',
      buttonText: 'Explore',
    },
    
    // Add more slides as needed
  ];

  
  const galleryData = [
    {
      image: 'https://images.squarespace-cdn.com/content/v1/54b30f27e4b07e1bade0f312/1555715757611-8ICSC634KKDPSUIHVE5R/decor-aid-interior-design-ideas-drapes.jpg',
      title: 'Balcony',
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod/images/hbx070123ashleymontgomery-006-64baff53d7e0e.jpeg',
      title: 'Wardrobe',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/56fb0dd262cd948e9a5e6eb9/1682362981672-V25E8UWZEOK0FYOVX4FC/shophouse-33.jpg?format=1000w',
      title: 'Personal Space',
    },
    {
      image: 'https://www.thespruce.com/thmb/P4hBQtEPZVrrWPdbtXy7-wv9fiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1161177015-f1de4ba58a6c4f50969d9119d80405a6.jpg',
      title: 'Living Space',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/5a86fc138a02c7424c73967f/1685459802586-0A0SKBS7ZL3YTN8A8DR5/20230519_Maisonellie_EDITS-51.jpg',
      title: 'Renovation',
    },
    {
      image: 'https://imageio.forbes.com/specials-images/imageserve/61cdd9ec2bbdedb659077751/Neutral-living-color-corrected/960x0.jpg?format=jpg&width=960',
      title: 'Living Space',
    },
    {
      image: 'https://cb.scene7.com/is/image/Crate/cb_mLP_20230908_DD_Hero_Poster?wid=768&qlt=50',
      title: 'Guest Area',
    },
    {
      image: 'https://img.freepik.com/premium-photo/living-room-with-couch-painting-wall_865967-126701.jpg',
      title:'Living Area',
    },
    {
      image: 'https://images.wsj.net/im-426915/?size=1.5',
      title: 'Modular Kitchen',
    },
    {
      image: 'https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/08/5cquQJ7w.jpeg',
      title: 'Bedroom',
    },
    {
      image: 'https://housing.com/news/wp-content/uploads/2022/11/image1-80.jpg',
      title: 'Luxury Bedroom',
    },
    {
      image: 'https://eticadesigns.com/wp-content/uploads/2020/07/wardrobe29.jpg',
      title: 'Custom Wardrobe',
    },
    {
      image: 'https://media.designcafe.com/wp-content/uploads/2020/08/19165535/girls-wardrobe-design.jpg',
      title: 'Aesthetic Designs',
    },
    // Add more gallery images as needed
  ];
  
 

  return (
    <div className="design" >
      <NavigationBarLogged/>
      <div className="slider">
        <Slider {...sliderSettings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="carousel-item">
              <img
                src={slide.image}
                alt={slide.title}
                className="slider-image"
              />
              <div className="slider-content">
                <h2><i>{slide.title}</i></h2>
                <p style={{paddingLeft:"100px", paddingRight:"100px", fontSize:"20px"}}><i>{slide.description}</i></p>
                
                <button className="slider-button">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div><br/><br/>
      <h3 style={{ color:"#644860",fontSize:"30px",lineHeight:"0"}}>&emsp;Luxenest Packages</h3>
      <p style={{lineHeight:"0"}}>&emsp;&emsp;Real homes tell real stories. And we have designed homes for every budget, style, scope and size.</p><br/>
  <div className={`cardd-section ${scrollPosition > 500 ? 'fade-in' : ''}`}>
  <div className="cardd">
  <div className="cardd-content">
      <h3 style={{color:"#644860",lineHeight:"0px"}}>Essentials </h3>
      <p style={{fontSize:"15px"}}><i>Rs. 1-2 lakhs</i></p>
      <p>A range of essential home interior solutions that's perfect for all your needs.</p>
  </div>
    <img
      src="https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/fhd-price-calculator-1677569861-BUCyg/packages-1677569897-ciKZT/desktop-1677569909-bkLKZ/essentials-desktop-1677569928-WCHBw.jpg" // Replace with your image URL
      alt="Card 1"
      className="cardd-image"
    />
</div>
<div className="cardd">
  <div className="cardd-content">
      <h3 style={{color:"#644860",lineHeight:"0px"}}>Premium</h3>
      <p style={{fontSize:"15px"}}><i>Rs. 3-5 lakhs</i></p>
      <p><i>Superior home interior solutions that will take your interiors to the next level.</i></p>
    </div>
    <img
      src="https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/fhd-price-calculator-1677569861-BUCyg/packages-1677569897-ciKZT/desktop-1677569909-bkLKZ/premium-desktop-1677569932-Tc87O.jpg" // Replace with your image URL
      alt="Cardd 2"
      className="cardd-image"
    />
  </div>
  <div className="cardd">
  <div className="cardd-content">
      <h3 style={{color:"#644860",lineHeight:"0px"}}>Luxe</h3>
      <p style={{fontSize:"15px"}}><i>Rs. 8-10 lakhs</i></p>
     <p><i>High-end interior solutions for the ultimate home interior experience you deserve.</i></p>
    </div>
    <img
      src="https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/fhd-price-calculator-1677569861-BUCyg/packages-1677569897-ciKZT/desktop-1677569909-bkLKZ/luxe-desktop-1677569931-ZV4Be.jpg" // Replace with your image URL
      alt="Card 3"
      className="cardd-image"
    />
  </div>
</div><br/>
    
      <h3 style={{ color:"#644860",fontSize:"30px",lineHeight:"0"}}>&emsp;Inspiration for home interior designs</h3>
      <p style={{lineHeight:"0"}}>&emsp;&emsp;Give your home a new look with these interior design ideas curated for you</p>
      <div className="gallery">
       
        {galleryData.map((item, index)=>(
         <div key={index} className={`gallery-item ${scrollPosition > 800 ? 'fade-in' : ''}`}>
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-title">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default DesignLog;
