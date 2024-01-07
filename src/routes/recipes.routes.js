import { Router } from "express";
import RecipesController from "../controllers/recipes.controller.js";

const router = Router();
router.get("/user", RecipesController.get)
router.get("/user/:id",RecipesController.getById)
router.post("/user", RecipesController.create)
router.put("/user/:id",RecipesController.update)
router.delete("/user/:id",RecipesController.delete)

export default router