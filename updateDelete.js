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

// Fruit.updateOne({ _id: "64b39650433c16ade9e00877" }, { name: "Naga" })
//   .then(function (fruits) {
//     console.log("Berhasil Update Data", fruits);
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });

Fruit.deleteOne({ _id: "64b39650433c16ade9e00877" })
  .then(function (fruits) {
    console.log("Berhasil Delete Data", fruits);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

Fruit.find()
  .then(function (fruits) {
    // Menghilangkan parameter 'error'
    mongoose.connection.close();
    console.log("Data data setelah delete ");

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  })
  .catch(function (error) {
    // Menambahkan penanganan kesalahan dengan 'catch'
    console.log("Error:", error);
  });
