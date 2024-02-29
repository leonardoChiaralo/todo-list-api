import { Request, Response } from "express";
import TaskService from "../services/TaskService";

class TaskController {
  public async createTask(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const task = await TaskService.postTask(data);
    return res.json(task);
  }

  public async readTasks(req: Request, res: Response): Promise<Response> {
    const tasks = await TaskService.getTasks();
    return res.json(tasks);
  }

  public async updateTask(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const data = req.body;
    const task = await TaskService.putTask(id, data);
    return res.json(task);
  }

  public async deleteTask(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const task = await TaskService.deleteTask(id);
    return res.json(task);
  }

  public async completeTask(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const task = await TaskService.patchTask(id);
    return res.json(task);
  }
}

export default new TaskController();
