import React, {useState} from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button, Divider, Drawer,
  IconButton,
  List, ListItem, ListItemIcon, ListItemText,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../contexts/AuthContext";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  const {logged, update} = useAuthContext();

  const [open, setOpen] = useState(false);

  const logout = () => {
    sessionStorage.removeItem('logged');
    update();
    //window.location.reload();
    //navigate('/login');
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Login', 'Register'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Dashboard'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      {isMobile ?
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <IconButton color="white" size={"small"} onClick={() => setOpen(true)}>
              <MenuIcon/> Acme App
            </IconButton>
          </Box>
          {logged ?
            <>
              <Avatar src="https://picsum.photos/500/300?random=2" alt="John"/>
            </> :
            <>
              <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
            </>
          }
          <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </Toolbar>
        : <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1, cursor: 'pointer'}} onClick={() => navigate('/')}>
            ACME APP
          </Typography>
          {logged ?
            <>
              <Avatar src="https://picsum.photos/500/300?random=2" alt="John"/>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </> :
            <>
              <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
              <Button color="inherit" onClick={() => navigate('/register')}>Regisiter</Button>
            </>
          }
        </Toolbar>}
    </AppBar>
  );
};

export default Header;
