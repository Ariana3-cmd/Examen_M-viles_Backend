import express from "express";
import morgan from "morgan";
import bibliotecas from "./routes/libro.routes";
import editoriales from "./routes/editorial.routes";
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<h1>Bienvenidos</h1>"
  );
});

app.use("/libros", bibliotecas);
app.use("/editoriales", editoriales);

export default app;
