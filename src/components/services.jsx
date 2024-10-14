import React from 'react';

export const Services = (props) => {
    return (
        <div
            id='services'
            className='text-center'
        >
            <div className='container'>
                <div className='section-title'>
                    <h2>Our Services</h2>
                    <p>
                        Eastern Bird is also a pioneer in providing
                        comprehensive construction solutions for all types of
                        pre-engineered buildings (PEBs). Our services are
                        tailored to meet the specific needs of various
                        industries, ensuring timely completion and superior
                        quality.
                    </p>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                              <div
                                  key={`${d.name}-${i}`}
                                  className='col-md-4'
                              >
                                  {' '}
                                  <i className={d.icon}></i>
                                  <div className='service-desc'>
                                      <h3>{d.name}</h3>
                                      <p>{d.text}</p>
                                  </div>
                              </div>
                          ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );
};
