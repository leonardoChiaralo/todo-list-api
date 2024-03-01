import { Request, Response } from "express";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import UserService from "../services/UserService";

class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const user = await UserService.postUser(data);
    return res.json(user);
  }

  public async readUser(
    req: Request,
    res: Response,
  ): Promise<number | Response> {
    const data = req.body;
    const user = await UserService.getUser(data);
    if (user !== null) {
      const passwordMatch = await compare(data.password, user!.password);
      const username = data.username;

      if (passwordMatch) {
        const token = sign({ username }, "segredo", { expiresIn: "1h" });
        return res.json(token);
      }
      return res.statusCode;
    }
    return res.statusCode;
  }
}

export default new UserController();
