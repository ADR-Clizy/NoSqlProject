import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Loading from "../../assets/loading.gif";

import { Card, Grid } from "@mui/material";

const styles = {
  container: {
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: "50px",
  },
  card: {
    marginTop: "10%",
    textAlign: "center",
    boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.4)",
  },
};

export default function Home() {
  const navigate = useNavigate();
  const [weapons, setWeapons] = useState();
  const [errorOccured, setErrorOccured] = useState(false);

  useEffect(() => {
    if (!weapons) {
      getWeapons();
    }
  });

  const getWeapons = async () => {
    axios
      .get(`http://localhost:5001/api/weapons`, {})
      .then((iReponse) => {
        setWeapons(iReponse.data);
      })
      .catch(() => {
        setErrorOccured(true);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h1>Bienvenue sur le site des armes répertoriées.</h1>
        <h5>Cliquez sur une arme afin de voir les détails</h5>
      </div>

      {weapons ? (
        <Grid container spacing={3}>
          {weapons.map((aWeapon) => (
            <Grid item xs={6} md={4} lg={3} key={aWeapon._id}>
              <Card
                style={styles.card}
                onClick={() => {
                  navigate(`/details/${aWeapon._id}`);
                }}
              >
                <h4>{aWeapon.modele}</h4>
                <h5>{aWeapon.fabricant}</h5>
                <h6>Type : {aWeapon.typeArme}</h6>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          {errorOccured ? (
            <p>Une erreur s'est produite, veuillez réessayer</p>
          ) : (
            <img src={Loading} alt="loading" width="100px" />
          )}
        </>
      )}

      <Outlet />
    </div>
  );
}
