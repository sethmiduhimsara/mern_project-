const express = require("express");
const dbconnection = require("./config/db");
const app = express();
const routes = require("./routes/employees");
const cors = require("cors");
const bodyParser = require ("body-parser");

app.use(cors({ origin: true, credentials: true }));

//dbconnection
dbconnection();

// Parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("HELLOW WORLDs"));
app.use("/api/employees", routes);
const PORT = 3000;
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
