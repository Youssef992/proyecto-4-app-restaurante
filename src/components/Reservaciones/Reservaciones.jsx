import { React, useState } from "react";
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import book from '../Home/images/kigby_booking.jpg'
import book2 from '../Home/images/kigby_booking_2.jpg'
import { db } from "../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

const Reservaciones = () => {
    const [form, setForm] = useState({})
    const [show, setShow] = useState(false);
    const handleChange = (ev) => {
        console.log(ev.name);
        console.log(form);
        const date = new Date(Date.now())
        setForm({
            ...form,
            [ev.name]: ev.value,
            fecha: date

        })
    }
    const handleClick = async () => {
        console.log(form);
        await addDoc(collection(db, 'reservaciones'), form)
        setForm({})
        setShow(true);
    }
    return (<>
        <Row style={{ margin: '100px' }}>
            <Col sm={12}><Card.Title style={{ fontSize: '50px', textAlign: 'center', paddingBottom: '50px' }}>Reservaciones</Card.Title></Col>
            <Col sm={12}>
                <Alert show={show} variant="success">
                    <Alert.Heading>Registro Exitoso</Alert.Heading>
                    <p>Se hizo su reservación exitosamente. Esperamos pronto atenderlo.
                    </p>
                </Alert>
            </Col>
            <Col sm={3}>
                    <Card.Img variant="top" src={book2} />

                </Col>
            <Col sm={5}>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCompleteName">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control type="text" placeholder="Enter your complete Name" name="nombre" onChange={(e) => handleChange(e.target)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDateReserv">
                        <Form.Label>Fecha Reservación</Form.Label>
                        <Form.Control type="date" onChange={(e) => handleChange(e.target)} name="fecha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => handleChange(e.target)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleClick}>
                        Reservar
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