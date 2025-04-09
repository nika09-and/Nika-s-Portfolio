import linkedIcon from "../assets/indesignLogo.svg";
import gitHubIcon from "../assets/githubLogo.svg";
import behanceIcon from "../assets/behanceLogo.svg";

export default function Contacts() {
    return (
        <div id="contactsWrap">
            <div id="leftContactsWrap">
                <p className="secondaryHeaders">
                    <span className="angleBrackets">&lt;</span>CONTACTS<span className="angleBrackets">&gt;</span>
                </p>

                <div id="contactsInfoWrap">
                    <p className="littleTitles" id="contactsInfo">// Email : andriadze.n1@gmail.com</p>
                    <p className="littleTitles" id="contactsInfo2">// Phone : +995 599 360 403</p>
                    <div id="contactsIconsWrap">
                        <a href="https://www.linkedin.com/in/nika-andriadze-743382264" target="_blank" rel="noopener noreferrer" >
                            <img src={linkedIcon} alt="Linked Icon" />
                        </a>
                        <a href="https://github.com/nika09-and" target="_blank" rel="noopener noreferrer" >
                            <img src={gitHubIcon} alt="GitHub Icon" />
                        </a>
                        <a href="https://www.behance.net/nikaandriadze" target="_blank" rel="noopener noreferrer" >
                            <img src={behanceIcon} alt="Behance Icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="rightContactsWrap">
                <p className="littleTitles" id="getInTouch">Get in touch</p>
                <input type="text" id="nameInput" placeholder="Your Name..." className="inputs"/>
                <input type="text" id="emailInput" placeholder="Your Email..." className="inputs"/>
                <textarea
                    id="messageInput"
                    className="inputs"
                    placeholder="Type your message here..."
                ></textarea>
                <p className="secondaryHeaders" id="send">
                    <span className="angleBrackets">&lt;</span>SEND<span className="angleBrackets">&gt;</span>
                </p>
            </div>
        </div>
    );
}