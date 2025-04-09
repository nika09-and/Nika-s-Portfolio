// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 5000; // You can change this to any available port

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Create a transporter object using the default SMTP transport (Gmail in this case)
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail or any other email service
  auth: {
    user: "your-email@gmail.com", // Replace with your Gmail address
    pass: "your-email-password", // Replace with your Gmail password or App password (recommended)
  },
});

// POST route to handle form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body; // Get data from the request

  // Define the email options
  const mailOptions = {
    from: email, // The email from which the message is sent
    to: "andriadze.n1@gmail.com", // Replace with your email to receive the messages
    subject: "New Contact Form Submission",
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred while sending the email:", error);
      return res.status(500).send("Error occurred while sending email.");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
