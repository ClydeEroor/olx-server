import {Router} from "express"
import { checkAuth } from "../utils/checkAuth.js";
import { createPost, getAll ,getById } from "../controllers/posts.js";
const router = new Router()

// Create Post
router.post('/', checkAuth, createPost)

// Get Posts
router.get('/', getAll)

// Get Post By Id
router.get('/:id', getById)





export default router