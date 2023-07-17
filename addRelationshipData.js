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

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada"],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
  name: "Duku",
  rating: 8,
  review: "Rasanya Asem",
});

fruitDuku
  .save()
  .then(function (duku) {
    // Menghilangkan parameter 'error'
    console.log("Berhasil menyimpan buah apel dalam database", duku);
  })
  .catch(function (error) {
    // Menambahkan penanganan kesalahan dengan 'catch'
    console.log("Error:", error);
  });

const people = new People({
  name: "Annga",
  age: 24,
  favoriteFruit: fruitDuku,
});

people
  .save()
  .then(function (people) {
    // Menghilangkan parameter 'error'
    console.log("Berhasil create angga relationship dengan duku", people);
  })
  .catch(function (error) {
    // Menambahkan penanganan kesalahan dengan 'catch'
    console.log("Error:", error);
  });
