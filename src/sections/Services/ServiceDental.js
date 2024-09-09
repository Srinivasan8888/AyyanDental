import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesDatas from './ServiceDataDental';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const ServicesMain = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Feel amazing about your oral health" subTitle="Dental Services"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>Dentistry covers the prevention, diagnosis, and treatment of various oral health issues, Dentists also provide education on oral hygiene and preventive care to promote long-term dental health.</p>
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

export default ServicesMain;