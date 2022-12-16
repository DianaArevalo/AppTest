//CRUD

import clientModel from "../model/clientModel.js"

export async function createClient(req, res){
    //codigo aqui
    const clients = req.body.clients

    let documento = null

    try{
        documento = await clientModel.create(clients)
    } catch (error){
        res.status(400).json(error)
        return;
    }
 

    res.status(201).json(documento)
}

//READ
export async function readClient(req, res) {
    //IMPLEMENTACION AQUI
    const id = req.params.id

    let documento

    try {
        documento = await clientModel.findOne({ "_id": id })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//UPDATE
export async function updateClient(req, res) {

    //IMPLEMENTACION AQUI
    //1) findOneAndUpdate
    //2) findOne ... Update

    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await clientModel.updateOne({ "_id": id }, updates, { runValidators: true })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

export async function deleteClient(req, res) {
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento = null

    try {
        documento = await clientModel.deleteOne({ "_id": id })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}
