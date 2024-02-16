
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';

import { NavLink } from "react-router-dom";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
const pages = ['Dashboard', 'Transaction', 'Budget', 'Portfolio', 'Goal', 'Report'];
const auths = ['Signup', 'Login'];

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AllInclusiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:'Arial, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InvestCo.
          </Typography>

          <AllInclusiveIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InvestCo
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <NavLink to={`/${page.toLowerCase()}`} key={page} className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                <Button sx={{ my: 2, color: 'white', fontFamily:'Arial, sans-serif', }}>{page}</Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            {auths.map((page) => (
              <NavLink to={`/${page.toLowerCase()}`} key={page} className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
                <Button sx={{ my: 2, color: 'white' ,fontFamily:'Arial, sans-serif',}}>{page}</Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
