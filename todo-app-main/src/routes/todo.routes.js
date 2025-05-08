import {TODOS} from "../constantes/constantes.js";
import {Router} from "express";
import {borrarTodo, completeTodo, createTodo, gettodoById, getTodos} from "../controllers/todo.controller.js"

const routerTODOS = Router();

routerTODOS.get('/todos', getTodos);

routerTODOS.get('/todos/:id', gettodoById);

routerTODOS.post('/todos', createTodo);

routerTODOS.post( '/todos/complete/:id', completeTodo)

routerTODOS.delete( '/borrartodos/:id', borrarTodo);

export default routerTODOS;
