import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from '../Chart/Chart';
import Lists from '../Lists/Lists';
import './Main.css'

const Main = () => {

    const [task, setTask] = useState([]);
    useEffect(()=>{
        fetch('generated .json')
        .then(res => res.json())
        .then(data => setTask(data))
    }, [])

    const [parsent, setParsent] = useState([])
    useEffect(()=>{
        const complte = task.filter(item => item.completed === true);
        const inComplte = task.filter(item => item.completed !== true);
        const eachParsent = 100 / task.length;
        const completedParsent = eachParsent * complte.length;
        const inCompletedParsent = eachParsent * inComplte.length;

        setParsent([completedParsent, inCompletedParsent])
    }, [task])

    return (
        <div className='main_section'>
            <Container fluid >
                <Row>
                    <Col lg = {7}>
                        {
                            task.map(item => <Lists key = {item.id} item = {item}></Lists>)
                        }
                    </Col>
                    <Col lg = {5}>
                        <Chart parsent = {parsent} time = {task}></Chart>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;