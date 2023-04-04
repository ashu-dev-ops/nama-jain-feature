import React from "react";
import { SectionStyle } from "../styleComponents/SectionStyleComponent";
import { Box, Grid, Typography } from "@mui/material";
import FeatureCard from "../ui/FeatureCard";
import { featurInfo } from "../../utils/feature";

export default function LandingFeature() {
  return (
    <SectionStyle>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mx: { xs: 2, sm: 10 },
          my: { md: 15, sm: 5 },
          padding: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            textAlign="center"
            fontWeight="bold"
            // variant="h3"
            // sx={{ variant: { xs: "h3", sm: "h2" } }}
            sx={{ typography: { sm: "h3", xs: "h4" } }}
          >
            Teams are happier at Your.Office
          </Typography>
          <Typography
            textAlign="center"
            // sx={{ variant: { xs: "body", sm: "h6" } }} //not this
            sx={{ typography: { sm: "h5", xs: "body2" } }}
            color="primary.para"
          >
            At Work.Life, we believe workspaces should be about much more than
            just the day-to-day. Your team need a space to collaborate,
            socialise, and get inspired.
          </Typography>
        </Box>
        <Box paddingTop={4}>
          <Box>
            <Grid
              //   spacing={{ xs: 2, md: 3 }}
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
              container

              //   margin="auto"
              //   justify="center"
              // columns={{ xs: 6, sm: 8, md: 12 }}
            >
              {featurInfo.map((i, idx) => {
                return <FeatureCard {...i} key={idx} />;
              })}
              {/* */}
            </Grid>
          </Box>
        </Box>
      </Box>
    </SectionStyle>
  );
}
{
  /* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>1</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>2</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>3</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>4</Item>
  </Grid>
</Grid> */
}
