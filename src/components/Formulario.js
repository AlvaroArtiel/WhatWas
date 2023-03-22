import React from "react";
import PopUp from "../modal/PopUp";
import { useRef, useState } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

const Formulario = () => {
  const [modal, setModal] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const inputRef = useRef(null);

  const guardarTexto = (e) => {
    setMensaje(e.target.value);
  };

  const mostrarTexto = (e) => {
    setModal(!modal);
    //setMensaje("");
  };

  return (
    <>
      <Card className="cardForm" color="transparent">
          <CardTitle className="cardClaim" tag="h5">¡Busca tu canción preferida!</CardTitle>
            <Form>
                <Col md={12}>
                  <FormGroup>
                    <Label className="cardInfo" for="lyricsForm">
                      <p>Solo necesitas una frase de la canción</p>
                      Puedes añadir algún dato como el género del grupo, su procedencia o estilo.
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
              <Button className="button" onClick={mostrarTexto}>
                Averigua el nombre
              </Button>
            </Form>
      </Card>
      <PopUp mensajeAlerta={mensaje} setModal={setModal} modal={modal} />
    </>
  );
};

export default Formulario;
