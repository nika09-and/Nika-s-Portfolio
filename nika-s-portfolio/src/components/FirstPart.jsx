import linkedIcon from "../assets/indesignLogo.svg"
import gitHubIcon from "../assets/githubLogo.svg"
import behanceIcon from "../assets/behanceLogo.svg"

export default function FirstPart() {
    return (
        <div id="firstPartWrap">
            <div id="myTextWrap">
                <div id="connectionIcons">
                <a href="https://www.linkedin.com/in/nika-andriadze-743382264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="logoIcons">
                    <img src={linkedIcon} alt="Linked Icon" />
                </a>
                <a href="https://github.com/nika09-and" target="_blank" rel="noopener noreferrer" className="logoIcons">
                    <img src={gitHubIcon} alt="github Icon"  />
                </a>
                <a href="https://www.behance.net/nikaandriadze" target="_blank" rel="noopener noreferrer" className="logoIcons">
                    <img src={behanceIcon} alt="behance Icon"  />
                </a>
                </div>
                <div id="myText">
                    <p id="hello">Hello, I am</p>
                    <div id="myNameWrap">
                        <p id="name">NIKA ANDRIADZE</p>
                        <p id="prof">FRONT-END DEVELOPER </p>
                    </div>
                    <p id="download"> <span className="angleBrackets">&lt;</span>
                        DOWNLOAD CV
                        <span className="angleBrackets">&gt;</span></p>
                </div>
            </div>

            <div id="projectsWrap">
                
            </div>
        </div>
    );
}