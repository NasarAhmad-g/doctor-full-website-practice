import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from "../../../images/login.png"

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
}

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password dod not match');
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:12}} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                       Register
                    </Typography>
                    <form onSubmit={ handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="outlined-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="outlined-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{width:'75%', m:1}}
                            id="outlined-basic"
                            label="Your Confirm Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />

                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button><br />
                        <Link to="/login"><Button variant="text">Allready Registered? please : Login</Button></Link>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width:"100%"}} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;