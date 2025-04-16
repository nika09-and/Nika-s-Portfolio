import { useState } from "react";
import linkedIcon from "../assets/indesignLogo.svg";
import gitHubIcon from "../assets/githubLogo.svg";
import behanceIcon from "../assets/behanceLogo.svg";
import project1 from "../assets/project 1.svg";
import project2 from "../assets/project 2.svg";
import project3 from "../assets/project 3.svg";
import project4 from "../assets/project 4.svg";
import project5 from "../assets/project 5.svg";
import scroll from "../assets/scroll button.svg";
import scrollHover from "../assets/scroll button active.svg";
import portfolioFile from "../assets/ნიკა.ანდრიაძე(front-end დეველოპერი)cv.pdf";

export default function FirstPart() {
    const [activeProject, setActiveProject] = useState(0);
    const [scrollImage, setScrollImage] = useState(scroll);

    const projects = [project1, project2, project3, project4, project5];

    const handleScroll = () => {
        setActiveProject((prev) => (prev + 1) % 5);
    };

    const handleMouseEnter = () => {
        setScrollImage(scrollHover);
    };

    const handleMouseLeave = () => {
        setScrollImage(scroll);
    };

    return (
        <div id="firstPartWrap">
            <div id="myTextWrap">
                <div id="connectionIcons">
                    <a href="https://www.linkedin.com/in/nika-andriadze-743382264" target="_blank" rel="noopener noreferrer" className="logoIcons">
                        <img src={linkedIcon} alt="Linked Icon" />
                    </a>
                    <a href="https://github.com/nika09-and" target="_blank" rel="noopener noreferrer" className="logoIcons">
                        <img src={gitHubIcon} alt="GitHub Icon" />
                    </a>
                    <a href="https://www.behance.net/nikaandriadze" target="_blank" rel="noopener noreferrer" className="logoIcons">
                        <img src={behanceIcon} alt="Behance Icon" />
                    </a>
                </div>
                <div id="myText">
                    <p id="hello">Hello, I am</p>
                    <div id="myNameWrap">
                        <p id="name">NIKA ANDRIADZE</p>
                        <p id="prof">FRONT-END DEVELOPER</p>
                    </div>
                    <a href={portfolioFile} download="Nika_Andriadze_Portfolio.pdf" id="download">
                        <span className="angleBrackets">&lt;</span>
                        DOWNLOAD CV
                        <span className="angleBrackets">&gt;</span>
                    </a>
                </div>
            </div>
            <div id="firstRightWrap">
                <div id="projectsWrap">
                    {/* Displaying the projects in a circular manner */}
                    <img src={projects[activeProject]} alt="Project" id="project1" />
                    <img src={projects[(activeProject + 1) % 5]} alt="Project" id="project2" />
                    <img src={projects[(activeProject + 2) % 5]} alt="Project" id="project3" />
                    <img src={projects[(activeProject + 3) % 5]} alt="Project" id="project4" />
                    <img src={projects[(activeProject + 4) % 5]} alt="Project" id="project5" />
                </div>

                <button
                    id="scrollDownButton"
                    onClick={handleScroll}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={scrollImage} alt="scroll" id="scroll" />
                </button>
            </div>
        </div>
    );
}