import React from "react";

export const Certificate = (props) => {
  return (
    <div id="certificates" className="text-center">
      <div className="container d-flex flex-column">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Certificates</h2>
        </div>
        <div id="row" className="d-flex justify-evenly flex-row flex-wrap">
          <div className="certificates">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.id}-${i}`} className="certificate">
                    <a href={d.src} target="_blank">
                      <i class="fa fa-file-pdf-o" />
                      <span>{d.name}</span>
                    </a>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
