import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPostToServer, addPostToPlaceholder } from '../Services/Allapis'; // Import both addPost functions
import { toast } from 'react-toastify';

function Add({refreshData}) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async () => {
        if (!title || !body) {
            toast.warning("Please fill in both fields.");
            return;
        }
        
        const data = { title, body };
        try {
            await Promise.all([
                addPostToPlaceholder(data),
                addPostToServer(data)
            ]);
            toast.success('Post added successfully');
            refreshData()
            handleClose(); 
        } catch (error) {
            toast.error('Error adding post');
        }
    };

    return (
        <>
            <button className='btn btn-dark' onClick={handleShow}>ADD +</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg" 
            >
                <Modal.Header closeButton className='bg-dark text-light'>
                    <Modal.Title>Add Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input 
                        type="text" 
                        placeholder='Title' 
                        name='Title' 
                        className='form-control mb-3'
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <textarea 
                        placeholder='Details' 
                        name='Details' 
                        className='form-control mb-3'
                        onChange={(e) => setBody(e.target.value)} 
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Add;
