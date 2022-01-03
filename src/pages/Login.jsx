import React from 'react';
import {Box, Button, Container, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {update} = useAuthContext();

  const login = () => {
    // Verification user bd ...
    // operations ....
    sessionStorage.setItem('logged', JSON.stringify(true));
    update();
    //window.location.reload();
    //navigate('/dashboard');
  }

  return (
    <Container maxWidth="lg">
      <Box mt={8} display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={4} sx={{width: 500, maxWidth: '100%'}}>
          <Typography variant="h6" align="center" gutterBottom>
            Login
          </Typography>
          <TextField fullWidth label="E-mail" id="email" />
          <TextField fullWidth label="Password" id="password" />
          <Button variant="contained" color="primary" fullWidth onClick={login}>
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
