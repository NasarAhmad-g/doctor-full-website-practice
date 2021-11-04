import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import AppointmentBanner from '../appointment/AppointmentBanner';
import Banner from '../banner/Banner';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;