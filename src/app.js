import express from "express";
import "dotenv/config"
import { authRouter } from "./routers/authRouter.js";
import session from "express-session";
import { companyRouter } from "./routers/companyRouter.js";
import { employesRouter } from "./routers/employesRouter.js";
import { computerRouter } from "./routers/computerRouter.js";
import path from "node:path";




const app = express()

app.use('/static', express.static(path.resolve('public')))
app.use(session({
    secret:"r56htjr4*t$^pkojihugzjvfebjdkpoiuyh",
    resave:true,
    saveUninitialized:true
}))

app.use(express.urlencoded({ extended: true}))

app.use(authRouter)
app.use("/company", companyRouter)
app.use(computerRouter)
app.use(employesRouter)

app.listen(process.env.PORT, (error)=>{
    if (error) {
        console.error(error);
    }else{
        console.log("Serveur démarré");
        
    }
})