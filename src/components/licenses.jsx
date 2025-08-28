import React from "react";

export const License = (props) => {
  return (
    <div id="license" className="text-center">
      <div className="container d-flex flex-column">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Licenses</h2>
        </div>
        <div id="row" className="d-flex justify-evenly flex-row flex-wrap">
          <div className="licenses">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="license">
                    <span>{d.name}</span>
                    <span>{d.value}</span>
                    <span>{d.date}</span>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
