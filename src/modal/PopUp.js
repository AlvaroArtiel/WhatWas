import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUp = ({mensajeAlerta, modal, setModal}) => {
    
    const toggle = () => setModal(!modal);
  
    return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Aquí tienes tu respuesta</ModalHeader>
          <ModalBody>
            {/* {mensajeAlerta} */}
            Aquí irá la respuesta de ChatGPT: que contiene el nombre de la canción y el artista o grupo con una breve descripción.
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
