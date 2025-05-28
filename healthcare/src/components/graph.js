import React from 'react';
import '../stylesheet/graph.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// Each sub-array contains 3 values for bar height
const chartData = [
  [50, 55, 40, 20],
  [55, 40, 10, 50],
  [40, 15, 55, 30],
  [20, 65, 50, 40],
  [55, 30, 40, 20],
  [40, 25, 55, 30],
  [30, 45, 55, 30],
];

const ActivityChart = () => {
  return (
    <div className="activity-container">
      <div className="header">
        <span className="title">Activity</span>
        <span className="subtitle">3 appointment on this week</span>
      </div>

      <div className="chart">
        {chartData.map((bars, index) => (
          <div className="day" key={index}>
            <div className="bars">
              <div className="bar cyan" style={{ height: `${bars[0]}px` }} />
              <div className="bar blue" style={{ height: `${bars[1]}px` }} />
              <div className="bar gray" style={{ height: `${bars[2]}px` }} />
              <div className="bar last" style={{ height: `${bars[3]}px` }} />
            </div>
            <span className="day-label">{days[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;