import React, { ReactComponentElement, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { State, FetchState } from "../interfaces/ReduxInterfaces";
import { Pokemon } from '../interfaces/Pokemon';

/* Here we define the type of the props that are provided by the parent */
interface Props {
  //children: React.ReactNode /* To control the type of the children */
  dataResponse?: FetchState;
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUp = ({dataResponse, modal, setModal}: Props): JSX.Element => {
    const toggle = () => setModal(!modal);
  
    return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Aquí tienes tu respuesta</ModalHeader>
          <ModalBody>
            {dataResponse?.error == '' ? <img src={dataResponse?.response?.sprites?.front_shiny}/>: dataResponse?.error}
            {/* Aquí irá la respuesta de ChatGPT: que contiene el nombre de la canción y el artista o grupo con una breve descripción. */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Copiar
            </Button>
          </ModalFooter>
        </Modal>
    );
};

export default PopUp;
