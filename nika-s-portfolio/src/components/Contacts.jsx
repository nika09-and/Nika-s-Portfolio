import { useState } from "react";
import emailjs from "@emailjs/browser";
import linkedIcon from "../assets/indesignLogo.svg";
import gitHubIcon from "../assets/githubLogo.svg";
import behanceIcon from "../assets/behanceLogo.svg";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return; // Stop form submission
    }

    emailjs.send(
      "service_y62ag4a",       // 🔁 Replace this
      "template_mmj41d7",      // 🔁 Replace this
      formData,
      "lWYD1MCrGKCnk7XQ7"        // 🔁 Replace this (no more user ID!)
    ).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

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
            <a href="https://www.linkedin.com/in/nika-andriadze-743382264" target="_blank" rel="noopener noreferrer">
              <img src={linkedIcon} alt="Linked Icon" />
            </a>
            <a href="https://github.com/nika09-and" target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub Icon" />
            </a>
            <a href="https://www.behance.net/nikaandriadze" target="_blank" rel="noopener noreferrer">
              <img src={behanceIcon} alt="Behance Icon" />
            </a>
          </div>
        </div>
      </div>

      <div id="rightContactsWrap">
        <p className="littleTitles" id="getInTouch">Get in touch</p>
        <form onSubmit={handleSubmit} id="contactForm">
          <input
            type="text"
            id="nameInput"
            name="name"
            placeholder="Your Name..."
            className="inputs"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="emailInput"
            name="email"
            placeholder="Your Email..."
            className="inputs"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            id="messageInput"
            name="message"
            className="inputs"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <p
            className="secondaryHeaders"
            id="send"
            onClick={handleSubmit}
          >
            <span className="angleBrackets">&lt;</span>SEND<span className="angleBrackets">&gt;</span>
          </p>
        </form>
      </div>
    </div>
  );
}
