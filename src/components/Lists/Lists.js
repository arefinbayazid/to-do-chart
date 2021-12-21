import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Lists.css'

const Lists = (props) => {
    const {id, title, completed, time} = props.item;
    let status = completed;

    return (
            <div className={status ? "bg-green do_box" : "bg-red do_box"}>
                <Row className='d-flex align-items-center justify-content-between w-100'>
                    <Col lg={10}>
                        <h4 className='mb-1'>{title}</h4>
                        <p className='mb-1'>Serial Number : {id}</p>
                        <p className='mb-2'>Time spend : {time} min</p>
                        <Button className='mb-2'>More Info</Button>
                    </Col>
                    <Col lg ={2}>
                        <p className="status">{status ? 'Completed' : 'Pending'}</p>
                    </Col>
                </Row>
            </div>
    );
};

export default Lists;