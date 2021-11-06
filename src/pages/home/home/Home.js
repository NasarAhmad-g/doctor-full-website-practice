import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import AppointmentBanner from '../appointment/AppointmentBanner';
import Banner from '../banner/Banner';
import ContactForm from '../contactForm/ContactForm';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;