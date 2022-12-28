import'./home.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Home extends React.Component{
    render(){
        return(
            <Container className='home-container'>
                <Row className='home-row'>
                    <Col className='home-col-bride'>
                        <Image fluid='true' rounded='true' src={require("../assets/bride.png")}></Image>
                    </Col>
                    <Col className='home-col-text'>
                        <p><span>Sudhamathy:</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p><span>Rajagopal:</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Col>
                    <Col className='home-col-groom'>
                    <Image fluid='true' rounded='true' src={require("../assets/groom.png")}></Image>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;