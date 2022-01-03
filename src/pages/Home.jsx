import React from 'react';
import {Box, Container, styled, Typography, useMediaQuery, useTheme} from "@mui/material";

const CusBtn = styled('div')((props) => ({
  border: '1px solid #000',
  padding: 6
}));

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{mt: 3}}>
      <Box sx={{bgcolor: 'primary.light', height: '50vh'}} justifyContent="center" alignItems="center" display="flex">
        <Typography variant="h3" component="div" gutterBottom>
          Home page
        </Typography>
        <br/>
        <CusBtn>qodi</CusBtn>
      </Box>
    </Container>
  );
};

export default Home;
