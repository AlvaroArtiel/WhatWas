import logo from '../logo.svg';
import React from 'react';
import PopUp from '../modal/PopUp';
import { useEffect, useRef, useState } from 'react';
import { Button, Form, Row, Col, FormGroup, Label, Input, Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Formulario = () => {
    const [modal, setModal] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const inputRef = useRef(null);

    const guardarTexto = e => {
        setMensaje(e.target.value)
    };

    const mostrarTexto = e => {
        setModal(!modal);
        //setMensaje("");
    };

    return (
        <>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">¡Busca tu canción preferida!</CardTitle>
                    <CardText>
                        <Form >
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="lyricsForm">
                                            Cual es la letra de la canción que recuerdas?
                                        </Label>
                                        <Input
                                            ref={inputRef}
                                            onChange={guardarTexto}
                                            value={mensaje}
                                            id="lyricsForm"
                                            name="lyrics"
                                            placeholder="Escribe aquí la letra"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button color='primary' onClick={mostrarTexto}>
                                Mostrar texto
                            </Button>
                        </Form>
                    </CardText>
                </CardBody>
            </Card>
            <PopUp mensajeAlerta={mensaje} setModal={setModal} modal={modal} />
        </>
    );
};


export default Formulario;
