import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import logoImg from "../assets/logo.svg";
const Footer = () => {
  return (
    <Box
      height="40vh"
      bgcolor="primary.main"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box
            component="img"
            sx={{
              height: 30,
              // width: 30,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              flexGrow: 1,
              my: "auto",
            }}
            alt="The house from the offer."
            src={logoImg}
          ></Box>
          <Box>
            <List>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <ListItemText>
                  <Typography color="primary.contrastText">
                    Member Log in
                  </Typography>
                  <Typography color="primary.contrastText">About Us</Typography>
                  <Typography color="primary.contrastText">
                    Sustainability
                  </Typography>
                  <Typography color="primary.contrastText">Careers</Typography>
                  <Typography color="primary.contrastText">FAQs</Typography>
                  <Typography color="primary.contrastText">
                    Coworking
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
          <Box>
            <List>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <ListItemText>
                  <Typography color="primary.contrastText">
                    Virtual Office
                  </Typography>
                  <Typography color="primary.contrastText">
                    Flex Sign Up
                  </Typography>
                  <Typography color="primary.contrastText">B Corp</Typography>
                  <Typography color="primary.contrastText">
                    Contact Us
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box>
          <Typography>logos</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography color="primary.contrastText" textAlign={"center"}>
            Copyright @ Work.Life 2022. All rights reserved. We’re using
            cookies, hope that’s cool. Here’s our privacy policy.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
