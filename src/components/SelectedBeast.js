import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Modal } from 'react-bootstrap/';

class SelectedBeast extends React.Component {

    handleClose2 = () => {
        this.props.handleClose();
    }
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.description}</p>
                        <img src={this.props.imgURL} alt={this.props.title} width='465px'/>
                    </Modal.Body>

                    <Modal.Footer>
                    <p>Likes: {this.props.likesCounter}</p>
                        <Button variant="secondary" onClick={this.handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            
        )
    }
}
export default SelectedBeast;