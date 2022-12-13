const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Telah berhasil terkoneksi ke database!");
  })
  .catch(err => {
    console.log("Tidak dapat terkoneksi ke database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Selamat Datang di API Resep Makanan",
    created_by: "Rizal Danu"
  });
});

require("./app/routes/resep.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
