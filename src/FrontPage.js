import React, { useState } from "react"
import { Navbar, Container, Col, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFeed from "./components/SocialFeed";

export const FrontPage = () => {
    const [value, setValue] = useState(["twitter", "instagram", "facebook", "tiktok", "linkedin", "youtube"])
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        Social OmniFeed
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Row style={{"padding-top": "5%"}}>
                    <Col>Aggregate all your social media platforms in one place. Select which feeds to include using the button group above to demo the OmniFeed tool</Col>
                    <Col style={{"display": "flex", "justify-content": "center"}}>
                        <Container>
                        <ToggleButtonGroup style={{"display": "flex", "justify-content": "center", "padding": "2%"}} type="checkbox" value={value} onChange={(value) => setValue(value)}>
                            <ToggleButton id="tbg-btn-1" value={"twitter"}>
                                Twitter
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-2" value={"instagram"}>
                                Instagram
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-3" value={"facebook"}>
                                Facebook
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-4" value={"tiktok"}>
                                Tiktok
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-5" value={"linkedin"}>
                                Linkedin
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-6" value={"youtube"}>
                                Youtube
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <div style={{"display": "flex", "justify-content": "center"}}>
                            <SocialFeed logos={value}/>
                        </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}