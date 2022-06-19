import React from "react";
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import logo from '../Home/images/kirby-cafe_qrr1.jpg'
const Header = () => {
    return (
        <>
            <Row>
                <Col sm={12}>
                    <Navbar collapseOnSelect expand="sm" bg='light'>
                        <Container>
                            <Navbar.Brand href="#home" className='justify'>
                                <img src={logo}
                                    width="80"
                                    height="50"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link href='/aboutus' >
                                        Nostros
                                    </Nav.Link>
                                    <Nav.Link href='/menu'>
                                        Menú
                                    </Nav.Link>
                                    <Nav.Link href='/reservaciones'>
                                        Reservaciones
                                    </Nav.Link>
                                    <Nav.Link href='/contacto'>
                                        Contáctame
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </>
    )
}
export default Header