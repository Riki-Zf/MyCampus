import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  //email logic web3
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d4d8c6b5-1b52-4a86-ba60-5abc88eab125");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to procvide exceptional service to our university community</p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            riki011890@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            0851 2345 6789 1011
          </li>
          <li>
            <img src={location_icon} alt="" />
            Jln. mangga orang <br />
            Indonesia
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="enter your name here" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="enter your phone  number here" required />
          <label>Write your message here</label>
          <textarea name="message" rows={6} placeholder="enter your message here" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
import "./Contact.css";
export default Contact;
