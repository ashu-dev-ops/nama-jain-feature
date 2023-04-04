import React from "react";
import { PageStyle } from "../components/styleComponents/PageStyleComponent";
import { Box, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import imageOne from "../assets/Meeting-room-Morris-Holborn.jpg";
import imageTwo from "../assets/Workspace-Private-Office-2.jpg";
export default function BrowseSpace() {
  return (
    <PageStyle>
      <Box sx={{ height: "70vh", width: "100%", position: "relative" }}>
        <Box
          component="img"
          sx={{
            height: "100%",
            //width: 30,
            width: "100%",
            //flexGrow: 1,
          }}
          alt="The house from the offer."
          src={imageOne}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#EFEAE1",
            // top: 0,
            bottom: "2%",
            left: "5%",
            width: "40%",
            padding: 1,
            // borderRadius: "",
            borderRadius: "10px 10px",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Typography variant="h4" component="h2" color="">
            Workspace for businesses who care about people
          </Typography>
          <Typography variant="body1" component="h1" color="">
            Join 6,000+ happier freelancers and businesses in London, Reading
            and Manchester.
          </Typography>
          <Button variant="bookBtn">book now</Button>
        </Box>
      </Box>
      <Typography
        textAlign="center"
        sx={{
          typography: { sm: "h3", xs: "h4" },
          textTransform: "capitalize",
          width: "fit-content",
        }}
        // marginTop={2}
        margin={4}
        borderBottom={7}
        borderColor="primary.underline"
        // width="fitContent"
      >
        space that we are offering
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          gap: 4,
          flexDirection: { sm: "column", md: "row", xs: "column" },
        }}
      >
        <Card
          sx={{ width: { xs: "100%", sm: "100%", md: "45%" } }}
          height="40%"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={imageOne}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Meeting Rooms
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Book Space
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{ width: { xs: "100%", sm: "100%", md: "45%" } }}
          height="40%"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={imageTwo}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Private Cabin
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              Book Space
            </Button>
          </CardActions>
        </Card>
      </Box>
    </PageStyle>
  );
}
