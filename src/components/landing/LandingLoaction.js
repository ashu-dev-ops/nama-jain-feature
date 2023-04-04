import React from "react";
import { SectionStyle } from "../styleComponents/SectionStyleComponent";
import { Box, Button, Typography } from "@mui/material";
import map from "../../assets/map.jpeg";
import { Padding } from "@mui/icons-material";
export default function LandingLoaction() {
  return (
    <SectionStyle>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          //   bgcolor: "red",
          //   padding:10
          minHeight: "80vh",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            Padding: 5,
            display: "flex",
          }}
        >
          <Box
            component="img"
            src={map}
            sx={{ width: "80%", height: "80%", margin: "auto" }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            padding: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              typography: { sm: "h2", xs: "h4" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Loacted at premiumn Location
          </Typography>
          <Typography
            sx={{
              typography: { md: "body", sm: "body" },
              marginBottom: 3,
              // fontWeight: "medium",
              // fontWeight: "medium",
              color: "primary.para",
              // textAlign: { xs: "center", sm: "left" },
            }}
          >
            Flexible, productive, and cost-effective, coworking at Work.Life is
            a winning option for freelancers, entrepreneurs, and small teams.
            Networking opportunities? Meeting room access? Weekly socials and
            events, you say?! Take a break from soulless working and take a seat
            at one of our 9 coworking locations in London, with all the
            amenities, friendly co-workers, and exceptional coffee you could ask
            for. With pay monthly or pay as you go options, you get to choose
            how often you’ll leave.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              //  my: "auto",
              width: "fit-content",
              margin: { xs: "auto", sm: "0" },
              px: 2,
              py: 1,
            }}
          >
            Book A Space
          </Button>
        </Box>
      </Box>
    </SectionStyle>
  );
}
