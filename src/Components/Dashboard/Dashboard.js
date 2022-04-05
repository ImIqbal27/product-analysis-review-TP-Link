import React from 'react';
import Barchart from '../BarChart/Barchart';
import MyComposedChart from '../ComposedChart/MyComposedChart';
import MyChart from '../MyChart/MyChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    return (
        <div>
            <h2>dashboard</h2>
            <MyChart> </MyChart>
            <MyPieChart></MyPieChart>
            <Barchart></Barchart>
            <MyComposedChart></MyComposedChart>
        </div>
    );
};

export default Dashboard;