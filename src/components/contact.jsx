import { useState } from 'react';
import emailjs from 'emailjs-com';
import React from 'react';

const initialState = {
    name: '',
    email: '',
    message: '',
};
export const Contact = (props) => {
    // const [{ name, email, message }, setState] = useState(initialState);

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setState((prevState) => ({ ...prevState, [name]: value }));
    // };
    // const clearState = () => setState({ ...initialState });

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log(name, email, message);

    //   {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

    //   emailjs
    //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         clearState();
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='section-title'>
                                <h2>Get In Touch</h2>
                            </div>
                            <div className='map-container'>
                                <iframe
                                    title='map-location'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.359676405461!2d85.934171476077!3d20.4914766810268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a196d88bd2d6443%3A0xc8bfb8c073f3716!2sEASTERN%20BIRD!5e0!3m2!1sen!2sin!4v1729776753181!5m2!1sen!2sin'
                                    width='100%'
                                    height='450'
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerpolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-md-offset-1 contact-info'>
                        <div className='contact-item'>
                            <h3>Contact Info</h3>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i> Address
                                </span>
                                {props.data ? props.data.address : 'loading'}
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> Phone
                                </span>{' '}
                                {props.data ? props.data.phone : 'loading'}
                            </p>
                            <p>
                                {props.data ? props.data.phoneAlt : 'loading'}
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> Email
                                </span>{' '}
                                {props.data ? props.data.email : 'loading'}
                            </p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://www.facebook.com/profile.php?id=61560824570426'
                                        >
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target='_blank'
                                            rel='noreferrer'
                                            href="https://wa.me/9776048740?text=I'm%20interested%20for%20business%20discussion"
                                        >
                                            <i className='fa fa-whatsapp'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
