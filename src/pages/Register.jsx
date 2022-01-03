import React from 'react';
import {Box, Button, Container, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const register = () => {
    // Creer user bd ...
    // operations ....
    navigate('/login');
  }

  return (
    <Container maxWidth="lg">
      <Box mt={8} display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={4} sx={{width: 500, maxWidth: '100%'}}>
          <Typography variant="h6" align="center" gutterBottom>
            Register
          </Typography>
          <TextField fullWidth label="Name" id="name" />
          <TextField fullWidth label="E-mail" id="email" />
          <TextField fullWidth label="Password" id="password" />
          <Button variant="contained" color="primary" fullWidth onClick={register}>
            Register
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Register;
