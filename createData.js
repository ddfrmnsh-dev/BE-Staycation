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

// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "Rasanya Asem",
// });

// apple.save().then(function (error, apple) {
//   if (error) {
//     console.log("Error:", error);
//   } else {
//     console.log("Berhasil menyimpan buah apel dalam database", apple);
//   }
// });

// apple
//   .save()
//   .then(function (apple) {
//     // Menghilangkan parameter 'error'
//     console.log("Berhasil menyimpan buah apel dalam database", apple);
//   })
//   .catch(function (error) {
//     // Menambahkan penanganan kesalahan dengan 'catch'
//     console.log("Error:", error);
//   });

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Buah yang baik",
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 5,
  review: "Kaya vitamin C",
});

const pisang = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "Rasanya manis dan lembut",
});

Fruit.insertMany([kiwi, jeruk, pisang])
  .then(function (Fruit) {
    mongoose.connection.close();
    console.log("behasil menyimpan data dan close mongosee", Fruit);
  })
  .catch(function (error) {
    // Menambahkan penanganan kesalahan dengan 'catch'
    console.log("Error:", error);
  });
