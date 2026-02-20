import express from "express"
import { authguard } from "../services/authguard.js";
import { addComputer, assignComputer, deleteComputer, getUpdateComputer, postUpdateComputer, unassignComputer } from "../controllers/computerController.js";

export const computerRouter = express.Router()



computerRouter.post("/computer/add", authguard, addComputer)
computerRouter.post("/computer/delete/:id", authguard, deleteComputer)


computerRouter.get("/computer/update/:id", authguard, getUpdateComputer)
computerRouter.post("/computer/update/:id", authguard, postUpdateComputer)

computerRouter.post("/computer/assign", authguard, assignComputer)

computerRouter.post("/computer/unassign/:id", authguard, unassignComputer);