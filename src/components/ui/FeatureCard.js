import { Avatar, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function FeatureCard({ text, title, icon, color }) {
  return (
    <Grid item xs={12} sm={4}>
      {/* <Box
        p={2}
        bgcolor="#f7faff"
        sx={{ boxShadow: 10 }}
        m={2}
        maxHeight="20vh"
        minHeight="20vh"
        overflow="hidden"
      >
       
        <Box>
          <Typography fontWeight="bold">{title}</Typography>
          <Typography>{text}</Typography>
        </Box>
      </Box> */}
      <Card sx={{ maxHeight: "20vh", minHeight: "20vh" }}>
        <CardContent>
          <Avatar variant="square" sx={{ bgcolor: `${color}` }}>
            {icon}
          </Avatar>

          <Typography
            variant="body"
            component="div"
            sx={{ mt: 1 }}
            color="primary.para"
            // fontWeight="bold"
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
