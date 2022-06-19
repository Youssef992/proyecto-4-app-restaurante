import React from "react";
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import book from '../Home/images/kigby_booking.jpg'
import book2 from '../Home/images/kigby_booking_2.jpg'

const Reservaciones = () => {

    return (<>
        <Row style={{ margin: '100px' }}>
            <Col sm={12}><Card.Title style={{fontSize:'50px', textAlign:'center',paddingBottom:'50px'}}>Reservaciones</Card.Title></Col>
            <Col sm={3}>
                <Card.Img variant="top" src={book2} />

            </Col>
            <Col sm={5}>
                
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCompleteName">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" placeholder="Enter your complete Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDateReserv">
                        <Form.Label>Fecha Reservación</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>

            <Col sm={3}>
                <Card.Img variant="top" src={book} />

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
export default Reservaciones