import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.dotenv();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private dotenv(): void {
    dotenv.config();
  }

  private database(): void {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todo-list-api.xwmb1a5.mongodb.net/?retryWrites=true&w=majority&appName=todo-list-api`,
    );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
