import express from "express";

import { json } from "body-parser";
import { connectDB } from "./utils/mongo";

const app = express();
const PORT = 5555;

app.use(json());

connectDB();

app.listen(PORT, () => {
  console.log("1");
});
