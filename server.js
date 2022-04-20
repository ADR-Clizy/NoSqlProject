
const weapons = require("./armes.json");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mongoDB =
  "mongodb+srv://ynovnosql:uuSEGWHdNxQwp8yz@nosqlproject.1tqi0.mongodb.net/NoSqlProject?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const WeaponSchema = new Schema({
  referenceRGA: {
    type: String,
    default: "",
  },
  famille: {
    type: String,
    default: "",
  },
  typeArme: {
    type: String,
    default: "",
  },
  marque: {
    type: String,
    default: "",
  },
  modele: {
    type: String,
    default: "",
  },
  fabricant: {
    type: String,
    default: "",
  },
  paysFabricant: {
    type: String,
    default: "",
  },
  modeFonctionnement: {
    type: String,
    default: "",
  },
  systemeAlimentation: {
    type: String,
    default: "",
  },
  longueurArme: {
    type: Number,
    default: 0,
  },
  capaciteHorsChambre: {
    type: Number,
    default: 0,
  },
  capaciteChambre: {
    type: Number,
    default: 0,
  },
  calibreCanonUn: {
    type: String,
    default: "",
  },
  modePercussionCanonUn: {
    type: String,
    default: "",
  },
  longueurCanonUn: {
    type: Number,
    default: 0,
  },
  calibreCanonDeux: {
    type: String,
    default: "",
  },
  modePercussionCanonDeux: {
    type: String,
    default: "",
  },
  typeCanonDeux: {
    type: String,
    default: "",
  },
  longueurCanonDeux: {
    type: Number,
    default: 0,
  },
  calibreCanonTrois: {
    type: String,
    default: "",
  },
  modePercussionCanonTrois: {
    type: String,
    default: "",
  },
  typeCanonTrois: {
    type: String,
    default: "",
  },
  longueurCanonTrois: {
    type: Number,
    default: 0,
  },
  calibreCanonQuatre: {
    type: String,
    default: "",
  },
  modePercussionCanonQuatre: {
    type: String,
    default: "",
  },
  typeCanonQuatre: {
    type: String,
    default: "",
  },
  longueurCanonQuatre: {
    type: Number,
    default: 0,
  },
  armeSemiAutoApparenceArmeAuto: {
    type: String,
    default: "",
  },
  designation_commerciale: {
    type: String,
    default: "",
  },
  classementFrancais: {
    type: String,
    default: "",
  },
  classementEuropeen: {
    type: String,
    default: "",
  },
  prototype: {
    type: String,
    default: "",
  },
  visible: {
    type: String,
    default: "",
  },
  dateCreaRGA: {
    type: Date,
    default: Date.now(),
  },
  dateMajRGA: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Weapon = mongoose.model("Weapon", WeaponSchema);

app.listen(port, () => {
  
});