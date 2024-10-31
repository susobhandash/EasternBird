import React from 'react';

export const Testimonials = (props) => {
    return (
        <div id='testimonials'>
            <div className='container'>
                <div className='section-title text-center'>
                    <h2>Our clients</h2>
                </div>
                <div
                    className='marquee'
                    role='marquee'
                >
                    <div
                        className='row-flex'
                    >
                        {props.data
                            ? props.data.map((d, i) => (
                                  <div
                                      key={`${d.name}-${i}`}
                                      className='col'
                                  >
                                      <div className='testimonial'>
                                          {d.img ? (
                                              <div className='testimonial-image'>
                                                  {' '}
                                                  <img
                                                      src={d.img}
                                                      alt=''
                                                  />{' '}
                                              </div>
                                          ) : (
                                              ''
                                          )}

                                          <div className='testimonial-content'>
                                              <div className='testimonial-meta'>
                                                  {' '}
                                                  {d.name}{' '}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : 'loading'}
                    </div>
                </div>
            </div>
        </div>
    );
};
