// Home.js

import React, { useEffect, useState ,useRef} from 'react';
import './Home.css'; 
import NavBar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const alternateWords = ["Full Home", "Kitchen", "Bedroom", "Wardrobe"];
  const [scrollPosition, setScrollPosition] = useState(0)
  const cardData = [
    {
      image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
      title: 'Modular Interiors',
      description: 'Functional kitchen, wardrobe and storage',
    },
    {
      image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/full-home-1682066987-lk16r.jpg',
      title: 'Full Home Interiors',
      description: 'Turnkey interior solutions for your home',
    },
    {
      image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/commercial-1682066986-5w6x0.jpg',
      title: 'Commercial Interiors',
      description: 'Hassle-free solutions for your workspace',
    },
    {
      image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/vinviago-desk-1692618545-ToZjR.jpg',
      title: 'Luxury Interiors',
      description: 'Tailored interiors that redefine elegance',
    },
    {
      image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/reno-1682066988-lqJkS.jpg',
      title: 'Renovations',
      description: 'Expert solutions to upgrade your home',
    },
    
    {
      image: 'https://images.livspace-cdn.com/w:320/h:234/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/store-1682066989-xyAS5.jpg',
      title: 'Furniture & Decors',
      description: 'Wow products to amp up your space',
    },
    // Add similar objects for the remaining cards
  ];
  const FeaturedItem = ({ title,image, description }) => (
    <div className="featured-item">
      <div className="featured-item-image">
        <img src={image} alt="Featured Item" />
      </div>
      <div className="featured-item-description">
      <h3>{title}</h3>
        <p><i>{description}</i></p>
        <Link to="/design">
            <button className="custom-button">Explore our designs</button>
          </Link>
      </div>
    </div>
  );
  const marqueeCardData = [
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/50000-happy-homes-1682070435-ih1Ir.jpg',
      title: '75,000+ happy homes',
    },
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/easy-emis-1682070436-evtag.jpg',
      title: 'Easy EMIs',
    },
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/20-lakhcatalogue-products-1682070432-CoDEa.jpg',
      title: '20 lakh+ catalogues',
    },
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/40-cities-1682070433-M7Q2t.jpg',
      title: '50+ cities',
    },
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/flat-10-year-warranty-1-1682067957-aj1Rq.jpg',
      title: 'Flat 10-year warranty',
    },
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/146-quality-checks-1682070435-krIlQ.jpg',
      title: ' 126 quality checks',
    },
    {
      image: 'https://images.livspace-cdn.com/w:80/h:80/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/why-choose-us-1682067952-gXbOw/4-countries-1682070431-k0TjR.jpg',
      title: '3 countries',
    },

  ];
  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % alternateWords.length);
    }, 1000);
    return () => clearInterval(wordInterval);
  }, [alternateWords]);
  const descRef = useRef(null);

  const handleLearnMoreClick = () => {
    descRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
return (
    <div>
      <NavBar />
      <div className='home'>
        <div className={`home-content1 ${fadeIn ? 'fade-in' : ''}`}>
          <br />
          <h1>
            <i>
              <br />
              "Where Imagination Meets Reality. <br /> Style Meets Comfort.<br /> We Design It All."
            </i>
          </h1>
          <p>
            <i>Experience the Luxury of Custom Interiors.</i>
          </p>
          <Link to="/" onClick={handleLearnMoreClick}>
            <button className="custom-button">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="desc" ref={descRef}>
        <p style={{ fontSize: "18px", color: "#644860" }}>
          <strong>L U X E N E S T</strong>
        </p>
        <p style={{ fontSize: "38px" ,lineHeight:"0px"}}>
          Get the best interiors for your{" "}
          <strong style={{ color: "#644860", fontSize: "50px" }}>{alternateWords[wordIndex]}</strong>
        </p>
        <p style={{ textAlign: "center", paddingLeft: "200px", paddingRight: "200px", fontSize: "18px" }}>
          <i>Be it end-to-end interiors, renovation, or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish.</i>
        </p>
        <Link to="/Login">
            <button className="custom-button">Book us now</button>
          </Link>
      </div><br/>
      <div className={`cards-container ${scrollPosition > 500 ? 'fade-in' : ''}`}>
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={`Card ${index + 1}`} />
            <h3 style={{ color: "#644860" }}>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
       <div className={`featured-container ${scrollPosition > 1000 ? 'fade-in' : ''}`}>
        <FeaturedItem
          title="One-stop solution for all things interiors"
          image="https://cdn.mos.cms.futurecdn.net/SLdHiptLduvZMh5vPpGbAJ.gif"
          description="We bring you carefully-curated interior design ideas, to give your home a brand new look. Our team of interior designers have put together ideas across kitchen, bedroom, living room and more, to help you pick a design that will best suit your home interior requirements."/></div>
      <div className="marquee-container">
      <p style={{ fontSize: "28px", color: "#644860" ,textAlign:"center"}}>
          <strong>Why choose us ?</strong></p>
        <div className="marquee">
          {marqueeCardData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={`Card ${index + 1}`} />
              <h3 style={{ color: "#644860" ,fontSize:"14px" ,}}>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    <Footer/>
    </div>
  );
}
export default Home;
