import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React from 'react';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const settings = [{ route: 'portifolio', name: 'Go back to Portifolio' }];


export default function ButtonAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSelectMenu = (item: string) => {
    setAnchorElUser(null);
    if (item === 'portifolio') window.location.href = 'https://lcrezende.dev.br'
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <InsertChartIcon sx={{ mr: 2 }}/>
          <Typography variant="h6" component="div" sx={{ mr: 2}}>
            Financial Dashboard
          </Typography>

          <div className='flex grow'>
            <Tooltip title="All financial data displayed is fictional and intended solely for demonstration and portfolio presentation purposes.">
              <InfoOutlineIcon />
            </Tooltip>
          </div>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Lucas Rezende" src="https://avatars.githubusercontent.com/u/85887196?v=4" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.route} onClick={() => handleSelectMenu(setting.route)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}