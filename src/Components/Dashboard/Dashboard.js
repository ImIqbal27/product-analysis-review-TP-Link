import React from 'react';
import Barchart from '../BarChart/Barchart';
import MyComposedChart from '../ComposedChart/MyComposedChart';
import MyChart from '../MyChart/MyChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import './Dashboard.css'  ;
 
const Dashboard = () => {
    return (
        <div>
            <div className='dashboard-chart'>
                <MyChart> </MyChart>
                <MyPieChart></MyPieChart>
                <Barchart></Barchart>
                <MyComposedChart></MyComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;