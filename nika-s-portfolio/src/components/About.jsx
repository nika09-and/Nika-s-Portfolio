import React, { forwardRef } from "react";
import devskills from '../assets/skillsWindow.svg';
import designskills from '../assets/designSkillsWindow.svg';

const About = forwardRef((props, ref) => {
    return (
        <div id="aboutWrap" ref={ref}>
            <div id="aboutHeaderWrap">
                <p className="secondaryHeaders">
                    <span className="angleBrackets">&lt;</span>ABOUT<span className="angleBrackets">&gt;</span>
                </p>
                <p className="littleTitles">//Skills</p>
            </div>
            <p className="littleTitles">
                // I’m a passionate Front-End Developer with a keen eye for design and a love for crafting seamless, interactive web 
                <br />// experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js, I specialize   
                <br />// in building responsive, user-friendly interfaces that bring ideas to life.
                <br />// I thrive on turning complex problems into elegant solutions, ensuring performance, accessibility, and intuitive  
                <br />// user interactions. Whether it’s developing from scratch or improving existing applications, I strive to create   
                <br />// visually appealing and highly functional digital experiences.
                <br />// Check out my projects below to see my work in action!
            </p>
            <div id="skillsWrap">
                <p className="littleTitles" id="">// Programming and design skills</p>
                <div id="skillsIconsWrap">
                    <img src={devskills} alt="Development Skills" id="devSkills" />
                    <img src={designskills} alt="Design Skills" id="designSkills" />
                </div>
            </div>
        </div>
    );
});

export default About;