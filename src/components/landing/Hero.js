import { Box, Button, Typography } from "@mui/material";
import React from "react";
import heroImg from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "90vh",
        // backgroundColor: "red",
        width: "100%",
        flexDirection: { xs: "column", sm: "row" },
        // flexDirection: { sm: "column", md: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          //width: 30,
          width: { xs: "100%", sm: "100%%", md: "45%" },
          //   clipPath: " polygon(0 0, 90% 0, 100% 100%, 0 100%);",
          //   bgcolor: "blue",
          display: "flex",
          margin: "auto",
        }}
      >
        <Box sx={{ margin: "auto", padding: 4, width: "100%" }}>
          <Typography sx={{ fontWeight: "bold" }} color="primary.para">
            COWORKING SPACES
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 500 }}>
            Coworking
            <Box
              component="span"
              color="#377dff"
              borderBottom={7}
              borderColor="primary.underline"
              // sx={{
              //   position: "relative",

              //   "&::before": {
              //     content: '""',
              //     position: "absolute",
              //     width: "100%",
              //     height: 10,
              //     bgcolor: "red",
              //     bottom: 10,
              //   },
              // }}
            >
              {" "}
              made simple
            </Box>
          </Typography>
          <Typography variant="h6" fontWeight="regular">
            For entrepreneurs, startups and freelancers. Discover coworking
            spaces designed to inspire and to connect you to a community of
            motivated people.
          </Typography>
          <Box my={5} sx={{ display: "flex", gap: 3 }}>
            <Button variant="outlined" sx={{ px: 2, py: 1 }}>
              Book A Space
            </Button>
            <Button
              variant="contained"
              sx={{ px: 2, py: 1 }}
              component={Link}
              to="/spaces"
            >
              Browse Space
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          //   padding: 10,
          width: { xs: "100%", sm: "100%", md: "55%" },

          clipPath: {
            sm: " polygon(5% 0, 100% 0%, 100% 100%, 0 100%)",
            xs: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%) ",
          },
          //   fontWeight: "bold",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "100%",
            //width: 30,
            width: "100%",
            //   clipPath: " polygon(0 0, 100% 0, 100% 100%, 15% 100%);",
            bgcolor: "red",
            //flexGrow: 1,
          }}
          alt="The house from the offer."
          src={heroImg}
        ></Box>
      </Box>
    </Box>
  );
};

export default Hero;
