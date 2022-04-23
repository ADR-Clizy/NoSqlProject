import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import NotFoundImage from "../../assets/not_found.png";

const styles = {
  card: {
    marginTop: "30px",
    textAlign: "center",
    boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.4)",
  },
  button: {
    margin: "30px",
  },
};

export default function NotFound() {
  const _navigate = useNavigate();

  return (
    <Grid container spacing={0}>
      <Grid item sm={2} md={3} />
      <Grid item xs={12} sm={8} md={6}>
        <Box sx={{ "& > :not(style)": { m: 5 } }} noValidate autoComplete="off">
          <Card style={styles.card}>
            <h2>Page non trouvée</h2>
            <img src={NotFoundImage} alt="not found" width="256" />
            <h4>La page à la quelle vous tentez d'accéder n'existe pas</h4>
              <button
                style={styles.button}
                onClick={() => {
                  _navigate("/");
                }}
              >
                Accueil
              </button>

          </Card>
        </Box>
      </Grid>
      <Grid item sm={2} md={3} />
    </Grid>
  );
}