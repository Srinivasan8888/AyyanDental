import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesDatas from './ServiceDatasCosmetology';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const ServiceCosmetology = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Feel amazing about your skin and beauty" subTitle="Cosmetology Services"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>Cosmetology encompasses the care, enhancement, and treatment of your skin, hair, and overall appearance, including facials, treatments, and makeup application. Cosmetologists also provide guidance on skincare routines and beauty tips to maintain and elevate your natural beauty over time..</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesDatas.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

            {/* <div className="services-link text-center">
                <Link to='/'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div> */}
        </section>
    );
};

export default ServiceCosmetology;