import React, { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import CardMedia from "@mui/material/CardMedia";
import {Grid, Button} from "@mui/material";

function Urun() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
  );
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const imageUrlObject = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrlObject);
  };
  return (
    <div sx={{ margin: 40 }}>
      <Card variant="outlined" sx={{ width: 320, bgcolor: "pink", }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Mevcut fotograf"
              sx={{
                width: "100%", // Resmi kartın genişliğine sığdır
                height: "auto", // Oranları koru, yüksekliği otomatik ayarla
                bgcolor: "grey.300",
              }}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">Far Away Kadın Parfüm EDP 50 ml</Typography>
          <Typography level="body-sm">280,00 TL</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              FIRSATI YAKALA!
            </Typography>
            <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
100TL ve üzeri siparişlerleriniz Attraction Kadın Parfüm Seti 270TL
100TL ve üzeri siparişlerleriniz Attraction Erkek Parfüm Seti 270TL
4 al 3 öde
            </Typography>
          </CardContent>
        </CardOverflow>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained">Sepete Ekle</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Favorilerime Ekle</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Button variant="contained" component="span" sx={{marginTop:'10px'}}>
            Urun Fotografı yükleyin
          </Button>
        </label>
    </div>
  );
}

export default Urun;
