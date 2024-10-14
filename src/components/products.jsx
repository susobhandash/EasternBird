import React from 'react';

export const Products = (props) => {
    return (
        <div
            id='products'
            className='text-center'
        >
            <div className='container'>
                <div className='section-title'>
                    <h2>Our Products</h2>
                    <p>
                        At Eastern Bird, we offer a wide range of metal and
                        steel furniture that combines durability with aesthetic
                        appeal. Whether for residential, commercial,
                        educational, or luxury spaces, our furniture is designed
                        to meet your functional and stylistic needs.
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
                                  <div className='product-desc'>
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
