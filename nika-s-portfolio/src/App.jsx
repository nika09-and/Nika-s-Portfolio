import { useState, useRef } from 'react';
import Header from './components/Header';
import FirstPart from './components/FirstPart';
import About from './components/About';
import downArrow from './assets/downArrow.svg';
import downArrowActive from './assets/arrowDownActive.svg';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const aboutRef = useRef(null); // Ref for About section
  const portfolioRef = useRef(null); // Ref for Portfolio section

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to About
    }
  };

  const handleScrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to Portfolio
    }
  };

  return (
    <div id='wholeWrap'>
      <Header onAboutClick={handleScrollToAbout} onPortfolioClick={handleScrollToPortfolio} />
      <FirstPart />
      <div id='downArrowWrap'>
        <img
          src={isHovered ? downArrowActive : downArrow} // Change src based on hover state
          alt="Down Arrow"
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          onClick={handleScrollToAbout}
        />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Contacts />
    </div>
  );
}

export default App;
