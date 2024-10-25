import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container d-flex flex-column">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Meet the team behind Eastern Bird.
          </p>
        </div>
        <div id="row" className="d-flex justify-evenly flex-row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
