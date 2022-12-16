import express from "express"
import clientRouter from "./routes/clientRouter.js";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 8082

app.listen(port, ()=> {
    console.log("El servidor se esta ejecutando.");
})

mongoose.connect("mongodb+srv://FreelanceCol:grupo5@freelancecol.pzdp53s.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("la base de datos se encuentra conectada.");
    }
})

//Midleware
app.use(express.json())
app.use("/client", clientRouter)
app.use("/client/profile", clientRouter)
app.use("/client/reservations", clientRouter)
app.use("/client/searchD", clientRouter)
app.use("/client/searchC", clientRouter)
app.use("/client/update", clientRouter)
app.use("/client/deleteUser", clientRouter)
