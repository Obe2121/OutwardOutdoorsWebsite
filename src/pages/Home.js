// In src/pages/Home.js
import React from 'react';
import './Home.css'; // Ensure this points to your Home.css file
import teamPhoto from '../pages/Photos/TeamPhoto.JPG';
import HomeLeft from '../pages/Photos/HomeLeft.JPG';
import HomeRight from '../pages/Photos/HomeRight.JPG';
import Facebook from '../pages/Photos/facebook.png';
import xsocial from '../pages/Photos/x.png'
import Youtube from '../pages/Photos/youtube.png'
import TST from '../pages/Photos/TSTLogo.jpeg'
import JAS from '../pages/Photos/JASLogo.jpeg'
import OSU from '../pages/Photos/OSU.png'
import FourH from '../pages/Photos/FourHlogo.png'

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-video-container">
        <iframe
          src="https://www.youtube.com/embed/oASvYV9Ee8U?autoplay=1&mute=1&loop=1&playlist=oASvYV9Ee8U"
          title="YouTube video player"
          frameBorder="0"  // Corrected
          allowFullScreen   // Corrected
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
          <a href="https://www.youtube.com/@OutwardOutdoors" target="_blank" rel="noopener noreferrer" className="hero-button">Subscribe Now</a>
      </div>
      <h1 className="meet-the-team-title">Meet The Team</h1>
      <img src={teamPhoto} alt="Our Team" className="team-photo"/> {/* Add this line */}
      <h2 className="Who-We-Are">Who We Are</h2>
      <section className="Who-We-Are-Body">Welcome to Outward Outdoors! We are a 350+ acre outdoor recreation facility located in Cadiz, OH. Our mission is to bring the next generation into the Outdoors.</section>
      <div className="Home-Image-container">
        <div className="Left-image-container">
        <img src={HomeLeft} alt="Home-Left" className="Home-Image"/>
        <h2 className="left-home-title">What We Do</h2>
        <section className="left-image-body">Here at Outward Outdoors, if it is outside, we are probably doing it. We manage all 350+ acres with ethical hunting, fishing, fish movement, widlife feeding and more. </section> {/* Add this line */}
        </div>
        <div className="right-image-container">
        <img src={HomeRight} alt="HomeRight" className="Home-Image"/>
        <h2 className="right-home-title">Why We Do It</h2>
        <section className="right-image-body">We feel that it is our duty, and honor to pass down the knowledge of some of mankind's longest running traditions. Whether its where to shoot a deer, or what bait to use when fishing for largemouth, we are here to help. </section> {/* Add this line */}
        </div>
      </div>
      <div className="Connect-With-Us-Container">
        <h1 className="Connect-With-Us-Title">Connect With Us</h1>
        <div className="button-container">
        <a href="https://www.facebook.com/profile.php?id=100092290031391" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="face" className="facebook-image-button"/>
        </a>
        <a href="https://twitter.com/OutwardOutdoors" target="_blank" rel="noopener noreferrer">
          <img src={xsocial} alt="Button 2" className="x-image-button"/>
        </a>
        <a href="https://www.youtube.com/@OutwardOutdoors" target="_blank" rel="noopener noreferrer">
          <img src={Youtube} alt="Button 3" className="youtube-image-button"/>
        </a>
        </div>
      </div>
      <div className="Partners-container">
        <h1 className="Partners-Title">Our Partners</h1>
        <div className="partner-container">
          <a href="https://www.youtube.com/channel/UCktxUYaA3MTjxHZov9CBVrg" target="_blank" rel="noopener noreferrer">
          <img src={TST} alt="TST Button" className="TST-image-button"/>
          </a>
          <a href="https://www.jacobandsonsqualitymeats.com/" target="_blank" rel="noopener noreferrer">
          <img src={JAS} alt="JAS Button" className="JAS-image-button"/>
          </a>
          <a href="https://harrison.osu.edu/" target="_blank" rel="noopener noreferrer">
          <img src={FourH} alt="4H Button" className="JAS-image-button"/>
          </a>
          <a href="https://harrison.osu.edu/" target="_blank" rel="noopener noreferrer">
          <img src={OSU} alt="JAS Button" className="JAS-image-button"/>
          </a>
        </div>          
      </div>
    </div>
  );
};

export default Home;
