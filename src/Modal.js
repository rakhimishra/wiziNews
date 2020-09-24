import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  ModalContent,
  Button,
} from "react-bootstrap";
import "./Modal.css";
// function Details() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <div>
//              <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>

//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//         </div>
//     )
// }
const display = {
  display: "block",
};
const hide = {
  display: "none",
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,
    };
  }

  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }

//   details = this.props.data;
//   console.log(details);

  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content" >

        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <h4>Modal Header</h4>
        <a className="btn-flat" onClick={this.toggle}>
            Agree
          </a>
        </div>
      </div>
    );
    return (
      <div>
        <a className="btn" onClick={this.toggle}>
          {this.state.toggle ? "Close modal" : "Open modal"}
        </a>
        {modal}
      </div>
    );
  }
}

export default Details;

// import React,{useState} from  'react';
// import { Modal , ModalHeader , ModalBody,ModalFooter,ModalTitle,ModalContent,Button } from 'react-bootstrap';
// function Example() {
// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

//     return (
//   <>
//     <Button variant="primary" onClick={handleShow}>
//       Launch demo modal
//     </Button>

//     <Modal show={show} onHide={handleClose} animation={false}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   </>
//     );
//   }

//   export default Example
