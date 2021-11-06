import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height:'400px'
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Heare
                        </Typography>
                        <Typography variant='h5' sx={{my:3, fontSize:12, color:'gray',fontWeight:300}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas
                        </Typography>
                        <Button style={{ backgroundColor: "#5CE7ED" }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width:'350px'}} src={chair} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;