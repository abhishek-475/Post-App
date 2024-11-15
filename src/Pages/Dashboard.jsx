import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Add from '../Components/Add';
import { getPostsFromServer, getPostsFromPlaceholder, updatePostInServer, updatePostInPlaceholder, deletePostInServer, deletePostInPlaceholder } from '../Services/Allapis';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Dashboard() {
    const [getdata, setGetData] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [currentPostId, setCurrentPostId] = useState(null);

    useEffect(() => {
        handleData();
    }, []);

    const handleData = async () => {
        try {
            const [placeholderResponse, serverResponse] = await Promise.all([
                getPostsFromPlaceholder(),
                getPostsFromServer()
            ]);
            setGetData([...placeholderResponse.data, ...serverResponse.data]);
        } catch (error) {
            console.log(error);
            toast.error('Error fetching posts');
        }
    };

    const refreshData = () => {
        handleData();
    };

    const handleEdit = (post) => {
        setCurrentPostId(post.id);
        setEditTitle(post.title);
        setEditBody(post.body);
        setShowEditModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await Promise.all([
                deletePostInPlaceholder(id),
                deletePostInServer(id)
            ]);
            toast.success('Post deleted successfully');
            handleData(); 
        } catch (error) {
            toast.error('Error deleting post');
        }
    };

    const handleUpdatePost = async () => {
        const updatedData = { title: editTitle, body: editBody };
        try {
            await Promise.all([
                updatePostInPlaceholder(currentPostId, updatedData),
                updatePostInServer(currentPostId, updatedData)
            ]);
            toast.success('Post updated successfully');
            setShowEditModal(false);
            handleData();  
        } catch (error) {
            toast.error('Error updating post');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center p-4">
                <Add refreshData={refreshData} />
            </div>
            <div className="container mt-3">
                {getdata.length > 0 ? (
                    <div className="row justify-content-center">
                        {getdata.map((item) => (
                            <div className="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch" key={item.id}>
                                <div className="card shadow-sm w-100">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-center">{item.title}</h5>
                                        <p className="card-text text-center">{item.body}</p>
                                        <div className="mt-auto d-flex justify-content-between">
                                            <Button variant="warning" onClick={() => handleEdit(item)}>
                                                Edit
                                            </Button>
                                            <Button 
                                                variant="danger" 
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <h3>No Posts Available</h3>
                    </div>
                )}
            </div>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton className='bg-dark text-light'>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input 
                        type="text" 
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)} 
                        className="form-control mb-3"
                        placeholder="Title"
                    />
                    <textarea 
                        value={editBody} 
                        onChange={(e) => setEditBody(e.target.value)} 
                        className="form-control mb-3"
                        placeholder="Details"
                    />
                </Modal.Body >
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleUpdatePost}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Dashboard;
