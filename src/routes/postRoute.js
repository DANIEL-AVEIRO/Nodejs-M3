import express from "express";
import {
  postCreate,
  postDelete,
  postDetails,
  postList,
  postUpdate,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/list", postList);
router.post("/create", postCreate);
router.put("/update/:id", postUpdate);
router.delete("/delete/:id", postDelete);
router.patch("/details/:id", postDetails);


export default router;