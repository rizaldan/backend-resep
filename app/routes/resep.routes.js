module.exports = app => {
  const resep = require("../controllers/resep.controller.js");

  var router = require("express").Router();

  // Buat Resep Baru
  router.post("/kei", resep.create);

  // Tampilkan Semua Resep
  router.get("/", resep.findAll);

  // Mencari Resep Berdasarkan Nama
  router.get("/:nama", resep.findOne);

  // Update Resep
  router.put("/apdet=:id", resep.update);

  // Delete Resep
  router.delete("/apus=:id", resep.delete);

  app.use("/api/resep", router);
};
