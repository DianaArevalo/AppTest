import mongoose from "mongoose";

const perfil = mongoose.Schema({
    "mensaje": {type:String, required:true},
    "estado": String,
});

const clientModel = mongoose.Schema({
    "nombre":{type:String, required:true},
    "edad":{type:Number, required:true},
    "correo":{type:String, required:true},
    "profesion":{type:String, required:true},
    "ciudad":{type:String, required:true}
    
})

export default mongoose.model("client", clientModel)