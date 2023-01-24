import { Container, Row, Col} from "react-bootstrap"
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen'
import collabIMG from '../assets/projectsImg/collabImg.png'
import itTakesAVillageIMG from '../assets/projectsImg/itTakesAVillage.jpeg'
import tinderFureverIMG from '../assets/projectsImg/tinderFurever.jpeg'

export const Projects = () => {

    const projects = [
        {
            title: "Collab",
            imgURL: collabIMG,
            stack: "Tech Stack: React, Javascript, MUI, Ruby, Rails",
            description: "Collab is a project management application with user authentication & CRUD functionalities",
            github: "https://github.com/amart78/collab",
            demo: "https://youtu.be/ypAD_oB4Ems"
        },
        {
            title: "ItTakesAVillage",
            imgURL: itTakesAVillageIMG,
            stack: "Tech Stack: React, node.js, MUI, Nookipedia API, AWS, Pulumi",
            description: "ItTakesAVillage is an “Animal Crossing” character catalog application",
            github: "https://github.com/amart78/it-takes-a-village",
            demo: "https://youtu.be/v0YN9CH6AhI"
        },
        {
            title: "TinderFurever",
            imgURL: tinderFureverIMG,
            stack: "Tech Stack: Vanilla Javascript, HTML, CSS",
            description: "Tinder Furever is a pet adoption app where users can browse adoptable pets",
            github: "https://github.com/amart78/tinderFurever",
            demo: "https://youtu.be/B6kWoRE_3HA"
        }, 
        {
            title: "TicTacToe",
            imgURL: tinderFureverIMG,
            stack: "Tech Stack: Python",
            description: "Terminal-based 2-player Tic-tac-toe game written in Python",
            github: "https://github.com/amart78/tictactoe",
            demo: "https://www.youtube.com/watch?v=ypAD_oB4Ems"
            ,
        },
        {
            title: "CuppaCash",
            imgURL: tinderFureverIMG,
            stack: "Tech Stack: Java",
            description: "CuppaCas is a terminal-based ATM written in Java",
            github: "https://github.com/amart78/collab",
            demo: "https://www.youtube.com/watch?v=ypAD_oB4Ems"
        },
        {
            title: "Portfolio Site",
            imgURL: tinderFureverIMG,
            stack: "Tech Stack: React, Javascript, Bootstrap, CSS",
            description: "Portfolio showcasing skills, projects, & qualifications",
            github: "https://github.com/amart78/collab",
            demo: "https://www.youtube.com/watch?v=ypAD_oB4Ems"
        },   

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2> Projects </h2>
                            <Container >
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
                            </Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}