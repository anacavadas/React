import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
    
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
          isModalOpen: false
        };
      }

    toggleModal() {
        this.setState({
        isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }


    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                </Button>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col className="col-12">
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col className="col-12">
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col className="col-12">
                                    <Label htmlFor="author">Your Name</Label>
                                </Col>
                                <Col className="col-12">
                                    <Control.text model=".author" name="author" className="form-control"
                                                  placeholder="Your Name"
                                                  validators={{
                                                    minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters. ',
                                                maxLength: 'Must be 15 characters or less. '
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col className="col-12">
                                    <Label htmlFor="comment">Comment</Label>
                                </Col>
                                <Col className="col-12">
                                    <Control.textarea model=".comment" name="comment" rows="6" className="form-control" />
                                </Col>   
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>

                </Modal>
            </div>
            );
    }
}

export default CommentForm;