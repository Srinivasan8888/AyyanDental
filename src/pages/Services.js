import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Gallery/Gallery';
import ServiceBanner from '../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../sections/Symptoms/Symptoms';
import Appointment from '../sections/Appointment/Appointment';
import ServicesMain from '../sections/Services/ServiceDental';
import ServiceCosmetology from '../sections/Services/ServicesCosmetology';
const Services = () => {
    return (
        <>
            <Navbar />
            <ServiceBanner />
            <ServicesMain/>
            <ServiceCosmetology/>
            {/* <Symptoms /> */}
            <Gallery />
            <Appointment />
            <Footer />
        </>
    );
};

export default Services;