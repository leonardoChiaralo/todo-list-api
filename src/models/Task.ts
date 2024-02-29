import { Schema, model, Document } from "mongoose";

export interface Tasks extends Document {
  title: string;
  description: string;
  isCompleted: boolean;
}

export const TaskSchema = new Schema<Tasks>(
  {
    title: { type: String, required: true },
    description: { type: String },
    isCompleted: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

export default model<Tasks>("Task", TaskSchema);
