import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import project_img from "../assets/project-img.jpeg";

const LeftSidedLayout = () => {
  return (
    <div className="left-single-project">
      <div className="left">
        <img src={project_img} alt="project-img" />
      </div>
      <div className="right">
        <h3>BLOGGING</h3>
        <p>
          A blog, short for weblog, is a frequently updated web page used for
          personal commentary or business content. Blogs are often interactive
          and include sections at the bottom of individual blog posts where
          readers can leave comments.
        </p>
        <div className="tech-stacks">
          <h5>React</h5>
          <h5>Node</h5>
        </div>
        <div className="resource">
          <div>
            <h5>
              <a
                href="https://github.com/RahulChan35/BLogging-Chating"
                rel="noreferrer"
                target={"_blank"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Code{" "}
              </a>
            </h5>
            <span>
              <GitHubIcon />
            </span>
          </div>
          <div>
            <h5>
              <a
                href="https://blogging-chating.onrender.com/"
                rel="noreferrer"
                target={"_blank"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Live Demo{" "}
              </a>
            </h5>
            <span>
              <OpenInNewIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidedLayout;
