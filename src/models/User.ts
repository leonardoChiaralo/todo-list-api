import { Schema, model, Document } from "mongoose";

export interface Users extends Document {
  username: string;
  password: string;
}

export const UserSchema = new Schema<Users>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<Users>("User", UserSchema);
