import React, { useState } from 'react';
import Footer from './Footer';
import './Project.css'
import Features from '../component/Features.js';
import Gallery from '../component/Gallery.js';


function Project() {
    const [item] = useState(Features);

    return (
        <div>
            <div className="container-fluid mt-5 about-style">
                <div className="row">
                
                    <div className="col-md-12 col-12 mx-auto">
                        <h1 className="text-center main-heading">Projects</h1>
                        <p className="text-center sub-heading">Show match with us</p>
                        <div className="row">
                            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                                <div className="row mx-5">
                                    <div className="section-title">
                                        <div className="title">technologies</div>
                                        <h2 className="subtitle pb-3"> Mostly used</h2>

                                    </div>
                                    {item.map((elem) => {
                                        const { id, icon } = elem;
                                        return (
                                            <div className=" col-sm-6 col-md-6 col-lg-3 
                                            col-4 d-flex justify-content-center align-items-center flex-wrap" key={id}>
                                                <div className="col-lg-12 col-12 features-item">
                                                    <div className="icon"><i>{icon}</i></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                                <div className="section-title">
                                    <div className="title">Project</div>
                                    <h2 className="subtitle">Our Work Flow <hr /></h2>
                                </div>
                                <div className="intro-content">
                                    <h4>The two important things that we learn that "We are as powerful and strong as we allow yourself to be", and "The most challenging part of any endeavor is taking the first step, i.e.  making the first decision."</h4>
                                    <br />
                                    <p>In our development community, we focused on brushing up skills, team management, etc.</p>
                                    <br />
                                    <p>Mainly we provide knowledge on various technologies and try to build influential communication network among all programmer by online meetings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 about-style">
                <Gallery />
            </div>
            <Footer />
        </div>
    )
}

export default Project
