import { Box } from "@mui/material";
import React from "react";
import Hero from "../components/landing/Hero";
import LandingFeature from "../components/landing/LandingFeature";
import LandingPlans from "../components/landing/LandingPlans";
import LandingReviews from "../components/landing/LandingReviews";
import LandingLoaction from "../components/landing/LandingLoaction";

const HomePage = () => {
  return (
    <Box marginTop={8}>
      <Hero />
      <LandingFeature />
      <LandingPlans />
      <LandingLoaction />
      <LandingReviews />
    </Box>
  );
};

export default HomePage;
