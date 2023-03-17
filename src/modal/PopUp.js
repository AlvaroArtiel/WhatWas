import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PopUp = ({mensajeAlerta, modal, setModal}) => {
    
    const toggle = () => setModal(!modal);
  
    return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>¡Alerta!</ModalHeader>
          <ModalBody>
            {mensajeAlerta}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
    );
};


export default PopUp;
