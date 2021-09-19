const express = require('express');
const tasks = require('../models/tasks');
const router = express.Router();

const Task = require('../models/tasks')

// Extraer datos de la BD
router.get('/', async (req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

// Agregar registros a la BD
router.post('/', async(req,res)=>{
    // console.log(req.body);
    const {title,description} = req.body;
    const task = new Task({
        title,
        description
    })
    await task.save();
    res.json({status:'Tarea guardada'});
})

// Obtener 01 unica tarea
router.get('/:id',async (req,res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

// Actualizar registros de la BD
router.put('/:id',async (req,res)=>{
    const {title,description} = req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    // console.log(req.params.id);
    res.json({status:'Tarea actualizada'});
})

// Eliminar registros de la base de datos
router.delete('/:id',async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Tarea eliminada'});
})

module.exports=router;