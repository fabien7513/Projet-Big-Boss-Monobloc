import express from "express"
import { authguard } from "../services/authguard.js";
import { getLogin, getRegister, postLogin, postRegister, logout } from "../controllers/authController.js";
import { homeComputerEmploye } from "../controllers/companyController.js";


export const authRouter = express.Router();

authRouter.get("/", authguard, homeComputerEmploye)

authRouter.get("/register", getRegister)
authRouter.post("/register", postRegister)

authRouter.get("/login", getLogin)
authRouter.post("/login", postLogin)

authRouter.get("/logout", logout)