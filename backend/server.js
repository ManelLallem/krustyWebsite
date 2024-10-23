const express = require("express");
const hostname = "127.0.0.1";
const PORT = 7010;
const app = express();
const authRoute = require("./routes/AuthRoute");
const krustyKrabRoutes = require("./routes/krustyKrabRoutes");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", authRoute);

///// set up mongoose for Users database (for authentication)
const mongoose = require("mongoose");
MONGO_URI = "mongodb+srv://lallemm17:manel1717@cluster0.xbvcmav.mongodb.net/";
mongoose.connect(MONGO_URI, { dbName: "Users" });
const database = mongoose.connection;
database.once("open", () => {
    console.log("Connected to Users MongoDB");
});

// Set up mongoose for krustyKrabDatabase (for employees and dishes)
const krustyKrabConnection = mongoose.createConnection(
    "mongodb+srv://lallemm17:manel1717@cluster0.xbvcmav.mongodb.net/krustyKrabDatabase",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Use the new connection to access the models
require("./data/Employee")(krustyKrabConnection);
require("./data/Dish")(krustyKrabConnection);

// Routes for fetching employees and dishes
app.use("/krustykrab", krustyKrabRoutes);

app.listen(PORT, hostname, () => {
    console.log("Listening on port:", PORT);
});
