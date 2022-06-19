import React from "react";
import {  Card, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { db } from "../../firebase.js";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
const Menu = () => {
    const [todos, setTodos] = useState([]);

    const getData = () => {
        const todosArr = [];

        onSnapshot(collection(db, 'menu'), (snapshot) => {
            snapshot.docs.forEach(doc => todosArr.push(doc.data()))
            setTodos(todosArr);
        })
    }
   
    useEffect(() => {
        getData()
    }, [])
     console.log(todos);
    return (<>
    <Row>
    <Col sm={12}><Card.Title style={{fontSize:'50px', textAlign:'center',paddingBottom:'50px'}}>Nuestro Menú</Card.Title></Col>
           
    </Row>
        <Row xs={1} md={4} className="g-4">
        
            {todos.map(todo => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={todo.img} />
                        <Card.Body>
                            <Card.Title>{todo.nombre}</Card.Title>
                            <Card.Title className="card-title pricing-card-title">
                              {todo.precio} </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>


    </>)
}
export default Menu