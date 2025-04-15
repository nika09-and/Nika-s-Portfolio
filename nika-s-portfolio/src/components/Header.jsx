import { useState, useEffect } from "react";
import dropDownIcon from "../assets/dropDown.svg";

export default function Header({ onAboutClick, onPortfolioClick, onContactsClick }) {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 750);

    const handleMouseEnter = (link) => {
        setHoveredLink(link); // Set the hovered link
    };

    const handleMouseLeave = () => {
        setHoveredLink(null); // Reset the hovered link
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 750);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            <div id="headerWrap">
                <p id="headerTitle">Nika Andriadze</p>
                {isMobileView ? (
                    <div id="mobileHeader">
                        <img
                            src={dropDownIcon}
                            alt="Dropdown Icon"
                            id="dropdownIcon"
                            onClick={toggleDropdown}
                        />
                        {isDropdownOpen && (
                            <div id="dropdownMenu">
                                <p
                                    className="headerLink"
                                    id="about"
                                    onClick={() => {
                                        toggleDropdown();
                                        onAboutClick();
                                    }}
                                >
                                    <span className="angleBrackets">&lt;</span>ABOUT<span className="angleBrackets">&gt;</span>
                                </p>
                                <p
                                    className="headerLink"
                                    id="portfolio"
                                    onClick={() => {
                                        toggleDropdown();
                                        onPortfolioClick();
                                    }}
                                >
                                    <span className="angleBrackets">&lt;</span>PORTFOLIO<span className="angleBrackets">&gt;</span>
                                </p>
                                <p
                                    className="headerLink"
                                    id="contacts"
                                    onClick={() => {
                                        toggleDropdown();
                                        onContactsClick();
                                    }}
                                >
                                    <span className="angleBrackets">&lt;</span>CONTACTS<span className="angleBrackets">&gt;</span>
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div id="headerLinksWrap">
                        <p
                            className="headerLink"
                            id="about"
                            onMouseEnter={() => handleMouseEnter("about")}
                            onMouseLeave={handleMouseLeave}
                            onClick={onAboutClick}
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
                            onClick={onPortfolioClick}
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
                            onClick={onContactsClick}
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
                )}
            </div>
        </header>
    );
}