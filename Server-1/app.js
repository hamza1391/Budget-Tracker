import express from "express"
import cors from "cors"
import  getTransactionRouter  from "./routes/transaction.routes.js"

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use("/api/t1/", getTransactionRouter);
