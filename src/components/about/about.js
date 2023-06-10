import { Container } from "react-bootstrap";
import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./about.css";

const About = () => {
  return (
    <Container className="about">
      <div className="user">
        <Avatar />
        <h4>Madina Inomjonova</h4>
      </div>
      <div className="user-info">
        <ul className="list-header">
          <li>Email:</li>
          <li>Phone:</li>
          <li>Location:</li>
          <li>Job:</li>
        </ul>
        <ul className="list-body">
          <li>kmadinainomjonova@gmail.com</li>
          <li>+998(90)-210-59-69</li>
          <li>Uzbekistan, Andijon</li>
          <li>Frontend, React developer</li>
        </ul>
      </div>

      <ul className="messangers">
        <li>
          <GitHub />{" "}
          <a href="https://github.com/MadinaInomjonova">MadinaInomjonova</a>
        </li>
        <li>
          <LinkedIn />{" "}
          <a href="https://www.linkedin.com/in/madina-inomjonova">
            madina-inomjonova
          </a>
        </li>
        <li>
          <Telegram />
          <a href="https://t.me/kmadi">kmadi</a>
        </li>
      </ul>
    </Container>
  );
};

export default About;
