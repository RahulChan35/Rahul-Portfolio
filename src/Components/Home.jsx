// MATERIAL UI
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import avatar from "../assets/avatar.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-component">
        <div className="top">
          <div className="left">
            <h1>Full-Stack MERN Developer🖐️</h1>
            <p>
              Hi, I'm Rahul Chandrasekaran. A passionate Full-Stack (MERN)
              developer based in Tamil Nadu, India.📍
            </p>
            <div className="icon-group">
              <LinkedInIcon className="icon" />
              <GitHubIcon className="icon" />
            </div>
          </div>
          <div className="right">
            <div className="image-container">
              <img className="avatar" src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p>Tech Stack |</p>
          </div>
          <div className="right">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={react} alt="react" />
            <img src={node} alt="node" />
            <img src={mongo} alt="mongo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
