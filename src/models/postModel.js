import mongoose, { Schema } from "mongoose";

const postSchema = new Schema.create(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Anonymous",
    },
    viewer: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Posts", postSchema);
