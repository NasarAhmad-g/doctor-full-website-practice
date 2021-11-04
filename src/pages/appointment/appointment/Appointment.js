import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import AppointHeader from '../appointHeader/AppointHeader';
import AvailableAppointment from '../availableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader date={date} setDate={setDate}></AppointHeader>
            <AvailableAppointment  date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;