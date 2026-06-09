import Post from "../models/postModel.js";

export const postList = async (req, res) => {
  const posts = await Post.find();
  return res.status(200).json({
    success: true,
    message: "Post retrieve successfully!",
    posts: posts,
  });
};

export const postCreate = async (req, res) => {
  const { title, author, viewer, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const post = await new Post({
    title,
    author,
    viewer,
    description,
  });
  await post.save();
  return res.status(200).json({
    success: true,
    message: "Post create successfully!",
    post: post,
  });
};

export const postUpdate = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    return res.status(400).json({
      success: false,
      message: "Post not found!",
    });
  }
  post.title = req.body.title || post.title;
  post.author = req.body.author || post.author;
  post.viewer = req.body.viewer || post.viewer;
  post.description = req.body.description || post.description;
  await post.save();
  return res.status(200).json({
    success: true,
    message: "Post update successfully!",
    post: post,
  });
};

export const postDelete = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    return res.status(400).json({
      success: false,
      message: "Post not found!",
    });
  }
  await post.deleteOne();
  return res.status(200).json({
    success: true,
    message: "Post delete successfully!",
  });
};

export const postDetails = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  return res.status(200).json({
    success: true,
    message: "Post details show successfully!",
    post: post,
  });
};
