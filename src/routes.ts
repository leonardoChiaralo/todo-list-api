import { Router } from "express";
import TaskController from "./controlles/TaskController";
import UserController from "./controlles/UserController";

const routes = Router();
routes.post("/tasks", TaskController.createTask);
routes.get("/tasks", TaskController.readTasks);
routes.put("/tasks/:id", TaskController.updateTask);
routes.delete("/tasks/:id", TaskController.deleteTask);
routes.patch("/tasks/:id", TaskController.completeTask);

routes.post("/users", UserController.createUser);
routes.get("/users", UserController.readUser);

export default routes;
