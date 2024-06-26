import React, { Dispatch } from "react";
import { useRef, useState, useEffect } from "react";
import { fetchAPI } from '../redux/actions/SearcherAction'
import { useTypedDispatch, useTypedSelector } from '../redux/store'
import { State, FetchState } from "../interfaces/ReduxInterfaces";

import { Button, Form, Col, FormGroup, Label, Input, Card, CardTitle } from "reactstrap";
import PopUp from "../modal/PopUp";

const Formulario = () => {
  const dispatch = useTypedDispatch();
  const searcher = useTypedSelector((state: State): FetchState => state.searcher);
  const [modal, setModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const inputRef = useRef(null);

  /* Aux. Functions */
  const guardarTexto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const mostrarTexto = (): void => {
    (async () => {
      await dispatch(fetchAPI(keyword.toLowerCase()));
      setModal(!modal);
    })();
    
  };

  return (
    <>
      <Card className="cardForm" color="transparent">
          <CardTitle className="cardClaim" tag="h5">¡Vamos a encontrar el título!</CardTitle>
            <Form onSubmit={()=> mostrarTexto()}>
                <Col md={12}>
                  <FormGroup>
                    <Label className="cardInfo" for="lyricsForm">
                      <p>Solo necesitas una frase de la canción</p>
                      Puedes añadir algún dato como el género del grupo, su procedencia o estilo.
                    </Label>
                    <Input
                      ref={inputRef}
                      onChange={guardarTexto}
                      value={keyword}
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
      <PopUp dataResponse={searcher} setModal={setModal} modal={modal} />
    </>
  );
};

export default Formulario;
