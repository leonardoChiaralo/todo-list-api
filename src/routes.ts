import { Router } from "express";
import TaskController from "./controlles/TaskController";

const routes = Router();
routes.post("/tasks", TaskController.createTask);
routes.get("/tasks", TaskController.readTasks);
routes.put("/tasks/:id", TaskController.updateTask);
routes.delete("/tasks/:id", TaskController.deleteTask);
routes.patch("/tasks/:id", TaskController.completeTask);

export default routes;
