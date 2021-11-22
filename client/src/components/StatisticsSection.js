import React from "react";
import { statisticsData } from "./data/StatisticsData";

const StatisticsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-text">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="stats-container">
        {statisticsData.map((data, index) => {
          return (
            <div key={index} className="stat" style={data.style}>
              <img src={data.icon} alt={data.alt} />
              <h2>{data.h2}</h2>
              <p>{data.p}</p>
              {index < 2 && <div className="line"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default StatisticsSection;
