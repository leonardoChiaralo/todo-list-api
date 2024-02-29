import Task, { Tasks } from "../models/Task";

class TaskSevice {
  public async postTask(data: Tasks) {
    const task = await Task.create(data);
    return task;
  }

  public async getTasks() {
    const tasks = await Task.find();
    return tasks;
  }

  public async putTask(id: string, data: Tasks) {
    const task = await Task.findByIdAndUpdate(id, data, { new: true });
    return task;
  }

  public async deleteTask(id: string) {
    const task = await Task.findByIdAndDelete(id);
    return task;
  }

  public async patchTask(id: string) {
    const task = await Task.findByIdAndUpdate(id);
    if (task?.isCompleted) task.isCompleted = false;
    else task!.isCompleted = true;
    await task?.save();
    return task;
  }
}

export default new TaskSevice();
