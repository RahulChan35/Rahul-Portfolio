import LeftSidedLayout from "./LeftSidedLayout";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="project-component">
        <div className="header">
          <h5>PROJECTS</h5>
          <h3>Each project is a unique piece of development🧩</h3>
        </div>
        <div className="all-projects">
          <div>
            <LeftSidedLayout />
          </div>
          <div>{/* <LeftSidedLayout /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
