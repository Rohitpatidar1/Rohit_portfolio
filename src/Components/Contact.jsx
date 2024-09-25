import { useState } from "react";
import emailjs from "@emailjs/browser"; // सही इम्पोर्ट करें
import React from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_y0arf27";
    const templateId = "template_v9y5ov8";
    const publicKey = "26l0pXTYmCkkapxq9";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <section id="contact">
        <form onSubmit={handleSubmit} className="emailForm">
          <h1>contact</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
