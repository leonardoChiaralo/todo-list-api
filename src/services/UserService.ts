import User, { Users } from "../models/User";
import { hash } from "bcrypt";

class UserService {
  public async postUser(data: Users) {
    const hashedPassowrd = await hash(data.password, 10);
    data.password = hashedPassowrd;
    const user = await User.create(data);
    return user;
  }

  public async getUser(data: Users) {
    const user = await User.findOne({ username: data.username });
    return user;
  }
}

export default new UserService();
