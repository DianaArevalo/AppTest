import express from "express"
import { createClient, deleteClient, readClient, updateClient } from "../controller/clientController.js"

const clientRouter = express.Router()

//CRUD
//CREAR: POST
clientRouter.post("/", (req, res) => {
    createClient(req, res)
})

//LEER: GET
clientRouter.get("/:profile", (req, res) => {
    readClient(res)

})

//clientRouter.post("/reservations", (req, res) => {
    //createClient(req, res)

//})
clientRouter.get("/searchD", (req, res) => {
    readClient( res)

})
clientRouter.get("/searchC", (req, res) => {
    readClient( res)

})
//ACTUALIZAR: PUT/ PATCH
clientRouter.patch("/", (req, res) => {
    updateClient( res)

})
//ELIMINAR: DELETE
clientRouter.delete("/", (req, res) => {
    deleteClient(res)

})

export default clientRouter