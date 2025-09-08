import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

// Better weather icons
import WbSunnyIcon from "@mui/icons-material/WbSunny";      // Sun
import AcUnitIcon from "@mui/icons-material/AcUnit";        // Snowflake
import BeachAccessIcon from "@mui/icons-material/BeachAccess"; // Umbrella

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/505086272/photo/sunset-palm-tree.jpg?s=612x612&w=0&k=20&c=4tILBSVWMjDuIWznvFO1JyN5EA_2WjsGCMD-K5Gh4W8=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=735&auto=format&fit=crop";

  // image select logic
  let weatherImg =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  // icon select logic with better styling
  let weatherIcon =
    info.humidity > 80 ? (
      <BeachAccessIcon style={{ fontSize: 45, color: "#1565c0" }} />
    ) : info.temp > 15 ? (
      <WbSunnyIcon
        style={{
          fontSize: 45,
          color: "orange",
          filter: "drop-shadow(0 0 6px gold)",
        }}
      />
    ) : (
      <AcUnitIcon
        style={{
          fontSize: 45,
          color: "#00bcd4",
          filter: "drop-shadow(0 0 6px lightblue)",
        }}
      />
    );

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={weatherImg} alt="weather" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {info.city} {weatherIcon}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component="span"
              >
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}%</div>
                <div>Min Temp = {info.tempMin}&deg;C</div>
                <div>Max Temp = {info.tempMax}&deg;C</div>
                <div>
                  The weather can be described as <i>{info.weather}</i> and feels
                  like {info.feelsLike}&deg;C
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
