import React from 'react';
import ChartOne from '../ChartOne/ChartOne';
import ChartTwo from '../ChartTwo/ChartTwo';
import './Chart.css'


const Chart = (props) => {

    return (
        <div className='chart'>
            <h3>Admin Pie Chart</h3>
            <div className='chart_one'>
                <ChartOne parsent = {props.parsent}></ChartOne>
            </div>
            <h3>Admin Var Chart</h3>
            <div className='chart_one'>
                <ChartTwo time = {props.time}></ChartTwo>
            </div>
        </div>
    );
};

export default Chart;