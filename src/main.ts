import express, { Response } from "express";
import cors from "cors";
import places from "./places.json";

console.log(places);

const app = express();
app.use(cors());

app.get("/", (_, res: Response) => {
  res.status(200).send("Hello world");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
