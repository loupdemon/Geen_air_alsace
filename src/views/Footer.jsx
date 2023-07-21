import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import * as FaIcon from 'react-icons/fa'
import Logo  from "../assets/images/greenairalsace.png";

function Footer() {
    // const logo = "./assets/images/greenairalsace.png";

    return (
        <div className="text-white pt-5 pb-4 footer">
            <div className="container-fluid text-center text-md-left">

                <div className="row text-center text-md-left">

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <div className=" logo" style={{ color: "#ddd", textShadow: "0.2rem 0.3rem 0.1rem #111", letterSpacing: "0.5rem" }}><IconButton><Avatar src={Logo} /></IconButton>G2A</div>
                        <p>Green in Air is a contributors driven global sensor network that creates Open Environmental Data. <br />
                        Our mission is to inspire and enrich people’s lives by offering a platform for the collective curiosity in nature that is genuine, joyful and positive.</p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "#ddd" }}>Important Documents</h5>
                        <p><a href="https://drive.google.com/file/d/1yW9h3PF0me_8HcRJTBmvbXfVw6TNXT2J/view?usp=sharing" className="text-white" style={{ textDecoration: "none" }} title="Web Development Community">Functional specifications</a></p>
                        <p><a href="https://drive.google.com/file/d/1qu46DkUbD2wSy4xz54BKdAEa78OgNVbn/view?usp=sharing" className="text-white" style={{ textDecoration: "none" }} title="Web Development Community">PLanning </a></p>
                        <p><a href="https://drive.google.com/file/d/1HvqloI_WJ6TDRXlyHcJEwzBmiws5TMOS/view?usp=sharing" className="text-white" style={{ textDecoration: "none" }} title="Web Development Community">Budget</a></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "#ddd" }}>Useful links</h5>
                        <p><Link to="/" className="text-white" style={{ textDecoration: "none" }}> Home</Link></p>
                        <p><Link to="/about" className="text-white" style={{ textDecoration: "none" }}>About Us</Link></p>
                        <p><Link to="/project" className="text-white" style={{ textDecoration: "none" }}>Project</Link></p>
                        <p><Link to="/report" className="text-white" style={{ textDecoration: "none" }}>Explore</Link></p>
                        <p><Link to="/contact" className="text-white" style={{ textDecoration: "none" }}> Contact Us</Link></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "#ddd" }}>Contact</h5>
                        <div>
                            <p><i className="fas fa-home" style={{ marginRight: "10px" }}></i>📍 Centre commercial Rivetoile, 17 Route du Rhin, 67100 Strasbourg</p>
                            <p><i className="fas fa-envelope" style={{ marginRight: "10px" }}></i>📬 contact@aghilas.fr</p>
                            <p style={{ filter: "drop-shadow(0.2rem 0.3rem 0.6rem #000)" }}>
                                <iframe title="googleMap"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10559.608407801372!2d7.759634!3d48.5734238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c90734c44f01%3A0x4b6ee1825108775!2sCentre%20Commercial%20Rivetoile!5e0!3m2!1sfr!2sfr!4v1689613079642!5m2!1sfr!2sfr"
                                    width="100%" height="100%" frameBorder="0" style={{ border: "0" }} allowFullScreen=""
                                    aria-hidden="false" tabIndex="0"></iframe></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        </div>
                    </div>

                    <hr className="mb-4" />
                    <div className="row align-items-center">

                        <div className="col-md-7 col-lg-8">
                            <p> Copyright&copy; {(new Date().getFullYear())} | All rights reserved by:<Link to="/signup" style={{ textDecoration: "none" }}><strong className="text-link">&nbsp;G2A</strong></Link></p>
                        </div>

                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-right">

                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><Link to="/" className="btn-floating btn-sm"><FaIcon.FaLinkedinIn color="#f1f1f1" /></Link>
                                    </li>
                                    <li className="list-inline-item"><Link to="/" className="btn-floating btn-sm"><FaIcon.FaGithub color="#f1f1f1" /></Link>
                                    </li>
                                    <li className="list-inline-item"><Link to="/" className="btn-floating btn-sm "><FaIcon.FaFacebookF color="#f1f1f1" /></Link>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
