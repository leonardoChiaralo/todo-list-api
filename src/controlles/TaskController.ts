import { Request, Response } from "express";
import TaskService from "../services/TaskService";

class TaskController {
  public async createTask(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const task = await TaskService.postTask(data);
      return res.json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }
  }

  public async readTasks(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await TaskService.getTasks();
      return res.json(tasks);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }
  }

  public async updateTask(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const data = req.body;
      const task = await TaskService.putTask(id, data);
      return res.json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }
  }

  public async deleteTask(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const task = await TaskService.deleteTask(id);
      return res.json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }
  }

  public async completeTask(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const task = await TaskService.patchTask(id);
      return res.json(task);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }
  }
}

export default new TaskController();
