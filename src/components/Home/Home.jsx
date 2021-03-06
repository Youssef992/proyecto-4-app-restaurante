import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import Carrousel1 from './images/cafe.jpg'
import Carrousel2 from './images/Chapata.jpg'
import Carrousel3 from './images/cheesecake.jpg'
import Carrousel4 from './images/panque.jpg'
import AboutUs from '../About Us/AboutUs'
import Menu from '../Menu/Menu'
import Reservaciones from '../Reservaciones/Reservaciones'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <>
            <Header />
            <Row>
                <Col sm={12}>
                    <Carousel variant="light">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrousel1}
                                width="700"
                                height="571"
                                alt="Img 1"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrousel2}
                                width="700"
                                height="571"
                                alt="Img 2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrousel3}
                                width="700"
                                height="571"
                                alt="Img 3"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carrousel4}
                                width="700"
                                height="571"
                                alt="Img 4"
                            />

                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <AboutUs/>
            <Menu />
            <Reservaciones />
            <Footer />
        </>
    )
}

export default Home