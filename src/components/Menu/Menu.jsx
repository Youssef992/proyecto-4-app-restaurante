import React from "react";
import {  Card, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import { db } from "../../firebase.js";
import { onSnapshot, query, collection, orderBy, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {StarRating} from 'react-bootstrap-star-rating'
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
        <Header/>
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