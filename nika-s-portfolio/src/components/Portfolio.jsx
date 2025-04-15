import { useState } from 'react';
import ProjectWindow from './ProjectWindow.jsx';
import WeatherApp from '../assets/weatherApp-01-01.svg';
import cadeba from '../assets/cadeba.svg';
import maxLight from '../assets/max-light-01.svg';
import MathRush from '../assets/math-rush-01.svg';
import palindrome from '../assets/palondrome-01.svg';

export default function Portfolio() {
  const projects = [
    { title: 'Project 1', subTitle: '//Weather App', description: '//Displays real-time weather, forecasts, local time, and an interactive map using APIs.', image: WeatherApp, address: 'https://weather-app-89xo.vercel.app/' },
    { title: 'Project 2', subTitle: '//Cadeba', description: '//A 2D strategy mobile game where players use character cards with unique powers and weaknesses to gather resources, build structures, and outplay opponents', image: cadeba, address: 'https://nika09-and.github.io/cadebaTheGame/' },
    { title: 'Project 3', subTitle: '//Max Light', description: '//A custom JavaScript-powered website with a sleek, interactive interface, showcasing projects with smooth transitions and dynamic visuals.', image: maxLight, address: 'https://nika09-and.github.io/webProject-inProgress-/' },
    { title: 'Project 4', subTitle: '//Math Rush', description: '//A fast-paced game that challenges players with quick-fire math problems and score tracking.', image: MathRush, address: 'https://nika09-and.github.io/MathRush/' },
    { title: 'Project 5', subTitle: '//Palindrome Checker', description: 'A palindrome is a word or sentence that spelled the same way both forward and backward, ignoring punctuation, case, and spacing', image: palindrome, address: 'https://nika09-and.github.io/Palindrome_Checker/' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div id="portfolioWrap">
      <div id='PortfolioHeaderWrapMain'>
        <p className="secondaryHeaders">
          <span className="angleBrackets">&lt;</span>PORTFOLIO<span className="angleBrackets">&gt;</span>
        </p>
        <p className="littleTitles">//Projects</p>
      </div>

      <div id='projectWrap'>
        <div
          className={`slideContainer ${direction}`}
          key={`${direction}-${currentIndex}`} // 👈 Force React to re-render on every change
        >
          <ProjectWindow
            title={currentProject.title}
            subTitle={currentProject.subTitle}
            description={currentProject.description}
            image={currentProject.image}
            address={currentProject.address}
          />
        </div>
      </div>

      <div id='changeButtons'>
        <button id='changeButton' onClick={handlePrev}><span className="angleBrackets" id='but'>&lt;</span></button>
        <button id='changeButton' onClick={handleNext}><span className="angleBrackets" id='but'>&gt;</span></button>
      </div>
    </div>
  );
}
