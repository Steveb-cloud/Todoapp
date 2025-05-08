import { dbClient }  from "../db.js";
import {TODOS} from "../constantes/constantes.js";

export const getTodos = async (req, res) => {

    const {rows} = await dbClient.query(
        "SELECT * FROM todos",
    );

    res.status(200).json(rows);
}

export const gettodoById = async (req, res) => {

    const { id } = req.params;

    const {rows} = await dbClient.query("SELECT * FROM todos WHERE id = $1", [id]);

    if (rows.length > 0)
        res.status(200).json(rows[0]);
    else
        res.status(404).json({error: "No todos found."});
}

export const createTodo = async (req, res) => {
    try
    {
        const { name, description } = req.body;
        const complete = 0;


        const {rows} = await dbClient.query(
            "Insert into todos (name, description, complete) values ( $1, $2, $3) RETURNING *",
            [name, description, complete]
        )

        res.status(201).json(rows[0]);
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

export const completeTodo = async (req, res) => {
    const { id } = req.params;
    const { rows } = await dbClient.query(
        "UPDATE todos SET complete = '1' WHERE id = $1 RETURNING*",
        [id]);

    if (rows.length > 0)
        res.status(200).json(rows[0]);
    else
        res.status(404).json({error: "No todos found."});
}

export const borrarTodo = async (req, res) => {
    const { id } = req.params;
    const { rows } = await dbClient.query("DELETE FROM todos WHERE id = $1 RETURNING*",
        [id]);

    if (rows.length > 0)
        res.status(200).json(rows[0]);
    else
        res.status(404).json({error: "No todos found."});
}