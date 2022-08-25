import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import progress from "../assets/img/progress.png";

export const Projects = () => {

  const projects = [
    {
      title: "Material Science",
      description: "Informative Website",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio",
      description: "This Website!",
      imgUrl: projImg2,
    },
    {
      title: "Ongoing...",
      description: "More projects to come!",
      imgUrl: progress,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
          <Row>
            <Col size={12}>
                  <div>
                  <h2>Projects</h2>
                  <p>These are some projects that I have either ongoing or finished. Please let me know if you are interested in seeing the repo by using the contact form below.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}