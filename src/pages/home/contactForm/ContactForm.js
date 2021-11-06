import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';


const ContactForm = () => {
    return (
        <>
            <Typography sx={{my:5, textAlign:'center'}} variant="h3">
                CONTACT FORM
            </Typography> 
            <Box
                component="form"
                sx={{
                '& > :not(style)': {m:1, width: '65ch'},
                }}
                noValidate
                autoComplete="off"
                >
                
                <TextField id="outlined-basic" label="Name" variant="outlined" /> <br />
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br />
                <TextField id="outlined-basic" label="Phone" variant="outlined" /><br />
                <Button variant="contained">Submit</Button>

            </Box>
        </>
    );
};

export default ContactForm;