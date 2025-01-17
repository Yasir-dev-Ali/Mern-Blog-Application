import { Router } from "express";
import { signIn } from "../Controllers/user.controller.js";

const router = Router();

router.post("/signin", signIn);
// router.post("/signup", signUp);

export default router;