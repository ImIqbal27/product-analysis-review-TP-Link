import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Barchart = () => {
    const data = [
        {
            "name": "year 2015",
            "import": 4000,
            "export": 2400
        },
        {
            "name": "year 2016",
            "import": 3000,
            "export": 1398
        },
        {
            "name": "year 2017",
            "import": 2000,
            "export": 9800
        },
        {
            "name": "year 2018",
            "import": 2780,
            "export": 3908
        },
        {
            "name": "year 2019",
            "import": 1890,
            "export": 4800
        },
        {
            "name": "year 2020",
            "import": 2390,
            "export": 3800
        },
        {
            "name": "year 2021",
            "import": 3490,
            "export": 4300
        }
    ]
    return (
        <div>

            <BarChart width={450} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="export" fill="#8884d8" />
                <Bar dataKey="import" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Barchart;