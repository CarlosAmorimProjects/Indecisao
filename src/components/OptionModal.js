import React from "react";
import Modal from "react-modal";
import InApp from "./InApp";

const OptionModal = (props) =>
(
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleCloseOptionSelected}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >

    <h3 className="modal__title">Opção escolhida: </h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}   
    <button className="button" onClick = {props.handleCloseOptionSelected}> Fechar </button>
    </Modal>
)   ;


export default OptionModal;