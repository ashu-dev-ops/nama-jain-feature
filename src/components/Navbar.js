import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logoImg from "../assets/logo.svg";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const navItems = ["browsr space", "Contact Us"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box bgcolor="primary.main">
        <Box
          component="img"
          sx={{
            height: 50,
            // width: 30,
            maxHeight: { xs: 100, md: 167 },
            maxWidth: { xs: 100, md: 250 },
            flexGrow: 1,
          }}
          alt="The house from the offer."
          src={logoImg}
        />
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            component={Link}
            to="/contact"
          >
            <ListItemText primary={"Contact us"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            component={Link}
            to="/spaces"
          >
            <ListItemText primary={"Browse Spaces"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, height: 10 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
           
          >
            
          </Typography> */}
          <Box
            component={Link}
            sx={{
              flexGrow: 1,
              display: { md: "block", sm: "none", xs: "none" },
            }}
            to="/"
          >
            <Box
              component="img"
              sx={{
                height: 30,
                // width: 30,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                flexGrow: 1,
              }}
              alt="The house from the offer."
              src={logoImg}
            />
          </Box>

          <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
            <Button
              // key={item}
              sx={{ color: "#fff" }}
              component={Link}
              to="/contact"
            >
              contact us
            </Button>
            <Button
              // key={item}
              sx={{ color: "#fff" }}
              component={Link}
              to="/spaces"
            >
              Browse Spaces
            </Button>

            <Button variant="bookBtn">Book a tour</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
