import React from "react";
import "./projects.scss";
import first from "../../images/first-project.png";
import second from "../../images/second-project.png";
import third from "../../images/third-project.png";
import fourth from "../../images/fourth-project.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function Projects() {
  return (
    <div className="container">
      <div className="inner-container">
        <Card
          sx={{
            maxWidth: 345,
            margin: "10px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 7)",
            border: "4px solid yellow",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={first}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React Sneakers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Used ReactJs, Mock.io, Axios
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://stalwart-snickerdoodle-045b84.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see
            </a>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            margin: "10px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 7)",
            border: "4px solid yellow",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={second}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sweat Website
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Used ReactJs, Bootstrap, Axios, Sass, Material-UI
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://animated-parfait-73e88c.netlify.app/home"
              target="_blank"
              rel="noreferrer"
            >
              Click to see
            </a>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            margin: "10px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 7)",
            border: "4px solid yellow",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={third}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Stock Film
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Used ReactJs, Axios, Sass, Material-UI
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://stalwart-snickerdoodle-045b84.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see
            </a>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            margin: "10px",
            borderRadius: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 7)",
            border: "4px solid yellow",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={fourth}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quiz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Used ReactJs, Styles
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://teal-cuchufli-0a1376.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
