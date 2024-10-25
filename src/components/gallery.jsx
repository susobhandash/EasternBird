import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const Gallery = (props) => {
    return (
        <PhotoProvider>
            <div
                id='portfolio'
                className='text-center'
            >
                <div className='container'>
                    <div className='section-title'>
                        <h2>Gallery</h2>
                        <p>
                            Showcase of our products and services. 
                        </p>
                    </div>
                    <div className='row'>
                        <div className='portfolio-items'>
                            {props.data
                                ? props.data.map((d, i) => (
                                      <div key={`${d.title}-${i}`}>
                                          <PhotoView
                                              src={d.path}
                                              overlay
                                          >
                                              <div>
                                                  <img
                                                      src={d.path}
                                                      style={{
                                                          objectFit: 'cover',
                                                      }}
                                                      alt=''
                                                  />
                                                  <span>{d.title}</span>
                                              </div>
                                          </PhotoView>
                                      </div>
                                  ))
                                : 'Loading...'}
                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};
