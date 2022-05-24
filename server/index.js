const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const TodoItemRoute = require("./routes/todoitems");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log("Server connected"));
