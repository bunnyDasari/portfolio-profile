import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/twitter";
import "react-social-icons/github";
import "react-social-icons/linkedin";

import "./connect.css";
const Contact = () => {
  return (
    <div>
      <h1 className="connect-heading">Connect with me !!</h1>
      <div className="social-ion">
        <SocialIcon url="https://twitter.com/RohanD07601887" className="ion" />
        <SocialIcon url="https://github.com/bunnyDasari" className="ion" />
        <SocialIcon
          url="https://www.linkedin.com/in/rohandasari369/"
          className="ion"
        />
        
      </div>
      <h3 className="connect-heading">rohandasari098@gmail.com</h3>
    </div>
  );
};

export default Contact;
