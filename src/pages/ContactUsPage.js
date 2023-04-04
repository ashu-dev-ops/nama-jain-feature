import React from "react";
import { SectionStyle } from "../components/styleComponents/SectionStyleComponent";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import imagebg from "../assets/contact.webp";
export default function ContactUsPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        marginTop: 8,
        minHeight: "90vh",
        // backgroundImage: `url${imagebg}`,
        // backgroundImage: ` url(${imagebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '"some content"',
          backgroundImage: `url(${imagebg})`,
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.1,
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
          // padding: { sm: 4, md: 10 },
          padding: { sm: 4, md: 10, xs: 4 },
        }}
      >
        <Typography
          gutterBottom="true"
          sx={{ typography: { sm: "h2", xs: "h4" }, fontWeight: "bold" }}
        >
          Ask anything that is worrying you
        </Typography>
        <Typography sx={{ typography: { sm: "h5", xs: "body" } }}>
          Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something
          about TheFront works for our global partners. Want more information?
          Download our overview and a member of our specialist team will be in
          touch to talk about your goals for TheFront 2021.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
          padding: { sm: 4, md: 10, xs: 4 },
        }}
      >
        <Paper
          sx={{
            // padding: 10,
            // padding: { sm: 4, md: 10 },
            padding: { sm: 4, md: 10, xs: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <TextField id="outlined-basic" label="name" variant="outlined" />
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <TextField id="outlined-basic" label="query" variant="outlined" />
          <Button variant="contained">submit</Button>
        </Paper>
      </Box>
    </Box>
  );
}
