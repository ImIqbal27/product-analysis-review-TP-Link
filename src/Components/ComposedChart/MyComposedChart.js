import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const MyComposedChart = () => {
    const data = [
        {
            "name": "Page A",
            "import": 4000,
            "export": 2400,
            "loss": 2400
        },
        {
            "name": "Page B",
            "import": 3000,
            "export": 1398,
            "loss": 2210
        },
        {
            "name": "Page C",
            "import": 2000,
            "export": 9800,
            "loss": 2290
        },
        {
            "name": "Page D",
            "import": 2780,
            "export": 3908,
            "loss": 2000
        },
        {
            "name": "Page E",
            "import": 1890,
            "export": 4800,
            "loss": 2181
        },
        {
            "name": "Page F",
            "import": 2390,
            "export": 3800,
            "loss": 2500
        },
        {
            "name": "Page G",
            "import": 3490,
            "export": 4300,
            "loss": 2100
        }
    ]

    return (
        <div>

            <ComposedChart width={450} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="loss" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="export" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="import" stroke="#ff7300" />
            </ComposedChart>

        </div>
    );
};

export default MyComposedChart;