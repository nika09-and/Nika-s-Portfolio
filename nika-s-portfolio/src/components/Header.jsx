import { useState } from "react";

export default function Header() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => {
        setHoveredLink(link); // Set the hovered link
    };

    const handleMouseLeave = () => {
        setHoveredLink(null); // Reset the hovered link
    };

    return (
        <header>
            <div id="headerWrap">
                <p id="headerTitle">Nika Andriadze</p>
                <div id="headerLinksWrap">
                    <p
                        className="headerLink"
                        id="about"
                        onMouseEnter={() => handleMouseEnter("about")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="angleBrackets">
                            &lt;{hoveredLink === "about" ? " " : ""}
                        </span>
                        ABOUT
                        <span className="angleBrackets">
                            {hoveredLink === "about" ? " " : ""}&gt;
                        </span>
                    </p>
                    <p
                        className="headerLink"
                        id="portfolio"
                        onMouseEnter={() => handleMouseEnter("portfolio")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="angleBrackets">
                            &lt;{hoveredLink === "portfolio" ? " " : ""}
                        </span>
                        PORTFOLIO
                        <span className="angleBrackets">
                            {hoveredLink === "portfolio" ? " " : ""}&gt;
                        </span>
                    </p>
                    <p
                        className="headerLink"
                        id="contacts"
                        onMouseEnter={() => handleMouseEnter("contacts")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="angleBrackets">
                            &lt;{hoveredLink === "contacts" ? " " : ""}
                        </span>
                        CONTACTS
                        <span className="angleBrackets">
                            {hoveredLink === "contacts" ? " " : ""}&gt;
                        </span>
                    </p>
                </div>
            </div>
        </header>
    );
}