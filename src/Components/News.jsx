import React, { useEffect, useState } from "react";
import "./News.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function News() {
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0b9d08d351044c22b03c5eb38c61ceed&q=india"
      )
      .then((res) => setdata(res.data.articles));
  });
  const [data, setdata] = useState([]);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="card">
        {data.map((value) => {
          return (
            <Card sx={{ maxWidth: 345, minWidth:250}} className="cardContent">
              <CardMedia
                sx={{ height: 140 }}
                image={value.urlToImage}
                title="green iguana"
                className="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="title">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="desc">
                  {value.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default News;
