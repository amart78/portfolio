import { Container, Row, Col} from "react-bootstrap"
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen'
import collabIMG from '../assets/projectsImg/collab.png'
import itTakesAVillageIMG from '../assets/projectsImg/itTakesAVillage.jpeg'
import tinderFureverIMG from '../assets/projectsImg/tinderFurever.jpeg'
import portfolioIMG from '../assets/projectsImg/portfolio.jpeg'
import tictactoeIMG from '../assets/projectsImg/tictactoe.jpeg'

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
            title: "Portfolio Site",
            imgURL: portfolioIMG,
            stack: "Tech Stack: React, Javascript, Bootstrap, CSS",
            description: "Portfolio showcasing skills, projects, & qualifications",
            github: "https://github.com/amart78/portfolio",
            demo: ""
        },
        {
            title: "TicTacToe",
            imgURL: tictactoeIMG,
            stack: "Tech Stack: Python",
            description: "Terminal-based 2-player Tic-tac-toe game written in Python",
            github: "https://github.com/amart78/tictactoe",
            demo: "",
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