import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function dbConnection() {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((error) => {
      console.log("DB Failed to connect", error);
    });
}
