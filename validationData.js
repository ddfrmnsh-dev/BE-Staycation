const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const anggur = new Fruit({
  name: "Anggur",
  rating: 10,
  review: "Rasanya enkeunn",
});

anggur
  .save()
  .then(function (anggur) {
    // Menghilangkan parameter 'error'
    console.log("Berhasil menyimpan buah anggur dalam database", anggur);
  })
  .catch(function (error) {
    // Menambahkan penanganan kesalahan dengan 'catch'
    console.log("Error:", error);
  });
