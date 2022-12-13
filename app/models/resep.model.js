module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nama: String,
      deskripsi: String,
      gambar: String,
    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Resep = mongoose.model("makanan", schema);
  return Resep;
};
