import React from 'react'
import { useHistory } from 'react-router-dom';
import Footer from './Footer'
import './Contact.css';
import { IconButton, Button } from '@material-ui/core';
import * as FiIcon from 'react-icons/fi';
import emailjs from 'emailjs-com';

function Contact() {
    const history = useHistory()
    const serviceId = "service_zlda5gq";
    const templateId = "template_ovi8opc";
    const userId = "user_4fwpToohASWJK3M7k0Ky1";

    const sendEmail = async (e) => {
        e.preventDefault()

        await emailjs.sendForm(serviceId, templateId, e.target, userId).then((result) => {
            alert(`${result.text}! Submitted successfully. We'll catch you soon. Stay tuned with us.`)

        }, (error) => {
            alert(`Opps ${error.text}! We're sorry we couldn't send your message.`)
        });

        history.push("/")
    }

    return (
        <div className="contact">
            <div className="container-fluid mt-5 contact-style">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <h1 className="text-center main-heading">Contact</h1>
                        <p className="text-center sub-heading">Stay tuned with us</p>
                        <div className="row">
                            <div className="col-md-6 col-12 sec1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className="container-fluid container-contact">
                <div className="form">
                    <div className="contact-info">
                        <div className="map">
                            <iframe title="googlemap"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10559.608407801372!2d7.759634!3d48.5734238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c90734c44f01%3A0x4b6ee1825108775!2sCentre%20Commercial%20Rivetoile!5e0!3m2!1sfr!2sfr!4v1689613079642!5m2!1sfr!2sfr"
                                width="100%" height="200px" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div className="contact-box">
                            <h3 className="title">Address</h3>
                            <p className="text">You can use Tram D or A direction Etoile Polygone or Kehl. </p>
                            <div className="info">
                                <div className="information">
                                    <p className='icon'><i className="fas fa-street-view"></i></p>
                                    <p>📍 Centre commercial Rivetoile, 17 Route du Rhin, 67100 Strasbourg</p>
                                </div>
                                <div className="information">
                                    <p className='icon'><i className="far fa-envelope"></i></p>
                                    <p>contact@aghilas.fr</p>
                                </div>
                                <div className="information d-flex justify-content-center">
                                    <IconButton href="https://facebook.com"><FiIcon.FiFacebook color="#4267B2" /></IconButton>

                                    <IconButton href="https://github.com"><FiIcon.FiGithub color="#333" /></IconButton>

                                    <IconButton href="https://linkedin.com"><FiIcon.FiLinkedin color="#0077b5" /></IconButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form onSubmit={sendEmail}>
                            <h3 className="title">Contact Us</h3>
                            <div className="input-container">
                                <input type="text" name="user_name" className="input" placeholder="Name" required />
                            </div>
                            <div className="input-container">
                                <input type="user_email" name="email" className="input" placeholder="Email" required />
                            </div>
                            <div className="input-container">
                                <input type="tel" name="contact_number" className="input" placeholder="Phone Number" required />
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" placeholder="Message" required />
                            </div>
                            <Button type="submit" className="input-btn">send</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact