const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find()
  .then(function (fruits) {
    // Menghilangkan parameter 'error'
    console.log("Berhasil menyimpan buah apel dalam database");
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  })
  .catch(function (error) {
    // Menambahkan penanganan kesalahan dengan 'catch'
    console.log("Error:", error);
  });
