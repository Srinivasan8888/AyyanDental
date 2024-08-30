import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" class="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                            <option>Scaling and Polishing</option>
                            <option>Tooth Filling</option>
                            <option>Root Canal Treatment</option>
                            <option>Bridges and Crowns</option>
                            <option>Implant</option>
                            <option>Orthodontic Braces</option>
                            <option>Smile Makeover</option>
                            <option>Skin Lightening</option>
                            <option>Acne Treatment</option>
                            <option>Medi Facials</option>
                            <option>Botox and Fillers</option>
                            <option>Chemical Peels</option>
                            <option>PRP Treatment</option>
                            <option>Laser Hair Reduction</option>

                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Department</label>
                        <select class="form-control">
                            <option>Dental Department</option>
                            <option>cosmetology Department</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Dental and Cosmetology care</p>
                            <h6>+91 882-565-1269</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;