import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appiontmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',

    marginTop: 150,
}

const AppointmentBanner = () => {
    return (
        <Box style={appiontmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{width:"400px", marginTop:"-110px"}} src={img} alt="not found" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent: 'flex-start', textAlign:'left', alignItems:'Center'}}>
                    <Box>
                        <Typography variant="h6" sx={{mb:3}} style={{ color: "#5CE7ED" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{my:3}} style={{color:"white",fontSize:'12'}}>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas
                        </Typography>
                        <Button style={{ backgroundColor: "#5CE7ED" }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            
            
            </Grid>
      </Box>
    );
};

export default AppointmentBanner;