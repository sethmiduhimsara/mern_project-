// himsara123
const mongoose = require("mongoose");

const dburl = "mongodb+srv://himsara:himsara123@crudnewapp.98rha.mongodb.net/?retryWrites=true&w=majority&appName=crudnewapp";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connection = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("MongoDB Connected~");
  } catch (e) {
    console.error(e.message);
    process.exit();
  }
};
module.exports = connection;