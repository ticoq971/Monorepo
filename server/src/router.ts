import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

import programAction from "./modules/program/programAction";

router.get("/api/programs", programAction.browse);
router.get("/api/programs/:id", programAction.read);

import categoryActions from "./modules/category/categoryActions";
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

export default router;
