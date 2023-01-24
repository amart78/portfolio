import { Button, Card, Col } from "react-bootstrap"

export const ProjectCard = ( {title, imgURL, stack, description, github, demo}) => {
    return (
        
        <Col size={12} sm={8} md={6} >
            <Card className="proj-imgbx">
                <Card.Img variant="top" src={imgURL} alt="{title}"/>
                    <div className="proj-txt">
                        <h4> {title}</h4>
                        <h5>{description}</h5>
                        <span> {stack} </span>
                        <div></div>
                        <Card.Body>
                        <Button href={github}>Github</Button>{" "}
                        <Button href={demo}>Demo</Button>
                        </Card.Body>
                    </div>     
            </Card>
        </Col>
    )
}