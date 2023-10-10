import img1 from "../assets/img1.jpeg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-component">
        <div className="left">
          <div className="parent">
            <div className="first-child">
              <img src={img1} alt="" />
            </div>
            {/* <div className="second-child">
              <p>👨‍💻</p>
            </div> */}
          </div>
        </div>
        <div className="right">
          <h5>About Me</h5>
          <h3>
            A dedicated Full-Stack MERN developer based in Tamil Nadu, India.📍
          </h3>
          <p>
            As a Junior Full-Stack Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Node and MongoDB. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and technique. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
