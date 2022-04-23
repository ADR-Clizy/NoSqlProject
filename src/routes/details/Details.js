import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loading from "../../assets/loading.gif";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  title: {
    textAlign: "center",
    marginBottom: "0px  ",
    fontSize: "24px",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
  center: {
    display: "block",
    margin: "0px auto",
  },
  icon: {
    display: "block",
    margin: "10px auto",
  },
};

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [weapon, setWeapon] = useState();
  const [errorOccured, setErrorOccured] = useState(false);
  useEffect(() => {
    if (!weapon) {
      getWeapon();
    }
  });

  const getWeapon = async () => {
    axios
      .get(`http://localhost:5001/api/weapons/${id}`)
      .then((iResponse) => {
        setWeapon(iResponse.data);
      })
      .catch(() => {
        setErrorOccured(true);
      });
  };
  const handleClose = () => {
    navigate("/");
  };
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 1,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography style={styles.title}>
          Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        {weapon ? (
          <div style={{textAlign:"center"}}>
            <h4 style={{ marginTop: "0" }}>{weapon.modele}</h4>
            <p>Fabricant : {weapon.fabricant}</p>
            <p>Type : {weapon.typeArme}</p>
            <p>Réference RGA : {weapon.referenceRGA}</p>
            <p>Marque : {weapon.marque}</p>
            <p>Pays Fabricant : {weapon.paysFabricant}</p>
            <p>Mode de fonctionnement : {weapon.modeFonctionnement}</p>
            <p>Système d'alimentation : {weapon.systemeAlimentation}</p>
          </div>
        ) : (
          <>
            {errorOccured ? (
              <p>Une erreur est survenue, veuillez réessayez</p>
            ) : (
              <img src={Loading} alt="loading" />
            )}
          </>
        )}
      </DialogContent>
      {/* TODO ADD WEAPON DATA */}
    </Dialog>
  );
}
