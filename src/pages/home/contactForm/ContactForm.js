import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';


const ContactForm = () => {
    const handlecontuctFormSubmit = e => {
        alert("submited")
        e.preventDefault();
    }
    return (
        <>
            <Typography sx={{my:5, textAlign:'center'}} variant="h3">
                CONTACT FORM
            </Typography> 
            
            <form onSubmit={ handlecontuctFormSubmit}>
                <TextField
                    sx={{width:'50%', m:1}}
                    id="outlined-basic"
                    label="Your Name"
                    variant="outlined" />
                <br />
                <TextField
                    sx={{width:'50%', m:1}}
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined" />
                <br />
                <TextField
                    sx={{width:'50%', m:1}}
                    id="outlined-basic"
                    label="Your Phone"
                    variant="outlined" />
                <br />
                
                <Button type="submit" sx={{width:'50%', m:1}} variant="contained">Submit</Button>
            </form>
        </>
    );
};

export default ContactForm;