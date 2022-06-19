import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import logo from '../Home/images/kirby-cafe_qrr1.jpg'
import Header from "../Header/Header";

const AboutUs = () => {

    return (<>
        <Row>
            <Col sm={7}> <Card.Img variant="top" src={logo} style={{ width: '600px', height: '500px' }} /></Col>
            <Col sm={4}>
                <Card.Body style={{ fontSize: '60px', textAlign: 'center' }}>
                    <Card.Title style={{ fontSize: '60px', textAlign: 'center' }}><small class="text-muted"><b>Sobre Nostros</b><br></br></small></Card.Title>
                    <Card.Text style={{ fontSize: '30px', textAlign: 'justify' }}>
                        <small class="text-muted"> Dese la oportunidad de relajarse y tener una conversación mas amena con amigos y familiares en este bello entorno de nuestra cafetería.
                            En nosotros despertó la iniciativa de querer dar calidad buen ambiente a todos nuestros clientes, dándoles su propio espacio en compañía de un buen servicio y degustación de nuestros platillos.
                        </small>
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
        {/* <Card style={{ display: 'flex', flexDirection: "row", height: '500px' }}>
            <Card.Img variant="top" src={logo} style={{ width: '600px', height: '500px' }} />
            <Card.Body style={{ fontSize: '60px', textAlign: 'center' }}>
                <Card.Title style={{ fontSize: '60px', textAlign: 'center' }}>Sobre Nostros</Card.Title>
                <Card.Text style={{ fontSize: '25px', textAlign: 'justify' }}>
                    <small class="text-muted"> Dese la oportunidad de relajarse y tener una conversación mas amena con amigos y familiares en este bello entorno de nuestra cafetería.
                        En nosotros despertó la iniciativa de querer dar calidad buen ambiente a todos nuestros clientes, dándoles su propio espacio en compañía de un buen servicio y degustación de nuestros platillos.
                    </small>
                </Card.Text>
            </Card.Body>
        </Card> */}


    </>)
}
export default AboutUs