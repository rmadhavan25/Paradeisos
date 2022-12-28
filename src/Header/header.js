import'./header.css';
import React from 'react';
import { ImHeart } from "react-icons/im";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component{
    render(){
        return(
            <Navbar bg='light' variant='light' expand='md'sticky='top'>
                <Container>
                    <Navbar.Brand href="#home">Rajagopal <ImHeart /> Sudhamathy</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default Header;