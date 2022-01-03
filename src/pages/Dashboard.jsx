import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="sm" sx={{mt: 3}}>
      <Box sx={{bgcolor: '#cfe8fc', height: '50vh'}} justifyContent="center" alignItems="center" display="flex">
        <Typography variant="h3" component="div" gutterBottom>
          Dashboard page
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;
