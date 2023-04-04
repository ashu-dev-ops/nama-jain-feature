import React from "react";
import { SectionStyle } from "../styleComponents/SectionStyleComponent";
import { Box, Grid, Typography } from "@mui/material";
import { reviewInfo } from "../../utils/review";
import ReviewCard from "../ui/ReviewCard";

const LandingReviews = () => {
  return (
    <SectionStyle>
      <Box
        sx={{ display: "flex", flexDirection: "column", my: { md: 10, sm: 5 } }}
      >
        <Typography textAlign="center" variant="h2">
          Wall of Love
        </Typography>
        <Typography textAlign="center" variant="h6">
          real love from real customer
        </Typography>
        <Box sx={{ margin: "auto", padding: { xs: 3, sm: 5 } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {reviewInfo.map((i, idx) => {
              return (
                <Grid item key={idx} xs={2} sm={4} md={4}>
                  <ReviewCard {...i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </SectionStyle>
  );
};

export default LandingReviews;
