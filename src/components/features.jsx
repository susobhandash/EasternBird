import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container d-flex flex-column">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="d-flex align-center justify-evenly">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="section">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
