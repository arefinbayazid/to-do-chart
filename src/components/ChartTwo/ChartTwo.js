import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const ChartTwo = (props) => {

    let data = []
    let count = 0;
    const pesonTime = props.time.map(item => {
        let obj = {}
        count += 1;
        obj.name = count;
        obj.time = item.time;
        data.push(obj)
    })
    
    return (
        <div>
            <BarChart
                width={500}
                height={320}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                
                <Bar dataKey="time" fill="#187a00" className='my-3 text-center' />
                <Legend/>
            </BarChart>
        </div>
    );
};

export default ChartTwo;