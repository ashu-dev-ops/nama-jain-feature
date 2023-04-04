import React from "react";
import { Box, Button, Grid, Typography, Avatar } from "@mui/material";
import imageOne from "../../assets/plan-one.jpg";
import imageTwo from "../../assets/plan-two.jpg";
import imageThree from "../../assets/plan-three.jpg";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
// import { SectionStyle } from "../styleComponents/SectionStyleComponent";
import Star from "../../assets/member";
const list1 = [
  "priority room booking",
  "Free refreashments",
  "ninja fast wifi",
  "Yoga classes",
  "personal cab",
  "personal suits",
];
const LandingPlans = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", md: "row", xs: "column" },
        my: { md: 15, sm: 5 },
        // padding:5
        px: { md: 5, sm: 0 },
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "50%" }, padding: 2 }}>
        <Typography
          component="h2"
          gutterBottom="true"
          sx={{ typography: { sm: "h3", xs: "h4" } }}
        >
          Payment made easy in stores with speed
        </Typography>

        <Typography
          sx={{ typography: { sm: "h5", xs: "body" } }}
          component="h3"
          gutterBottom="true"
          color="primary.para"
        >
          When paying in stores, it doesn't share your actual card number, so
          your information stays secure. Plus, you can check out faster and
          easier.
        </Typography>
        <Grid container>
          {list1.map((i, idx) => {
            return (
              <Grid item sx={{ xs: 12, sm: 6 }} key={idx}>
                <Button>
                  <Button
                    variant="text"
                    startIcon={<StarPurple500Icon />}
                    disableRipple
                    // onClick={() => alert("Clicked")}
                  >
                    {i}
                  </Button>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
          position: "relative",
          minHeight: "60vh",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={imageOne}
          sx={{
            position: "absolute",
            top: 0,
            left: 20,
            height: 100,
            width: 100,
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src={imageTwo}
          sx={{
            position: "absolute",
            top: "30%",
            right: 0,
            height: 200,
            width: 200,
          }}
        />
        <Box>
          <Star />
        </Box>
        <Avatar
          alt="Remy Sharp"
          src={imageThree}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 150,
            width: 150,
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingPlans;
