import express from "express"
import { authguard } from "../services/authguard.js";
import { addEmploye, deleteEmploye, getUpdateEmploye, postUpdateEmploye } from "../controllers/employesController.js";


export const employesRouter = express.Router()

employesRouter.post("/employe/add", authguard, addEmploye)
employesRouter.post("/employe/delete/:id", authguard, deleteEmploye)

employesRouter.get("/employe/update/:id", authguard, getUpdateEmploye)
employesRouter.post("/employe/update/:id", authguard, postUpdateEmploye)
