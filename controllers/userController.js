const pool = require('../config/db');

//GET all users
const getUsers = async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:'Internal server error'});
    }
}
//GET user by id
const getUserById = async(req,res)=>{
    try{
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
        res.json(result.rows[0]);
    }       
    catch(error){
        console.error(error);
        res.status(500).json({error:'Internal server error'});
    }
}
//CREATE user
const createUser = async(req,res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({error:'Please provide all required fields'});
    }
    try{
        const result = await pool.query(`
            INSERT 
                INTO users (
                    username, 
                    email, 
                    password)
                VALUES ($1, $2, $3) 
            `, [username, email, password]);
        res.json(result.rows[0]);           
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:'Internal server error'});
    }
}
//EDIT user
const editUser = async(req,res)=>{
    const{username,email,password} = req.body;
    try{
        const result = await pool.query(`
            UPDATE users        
            SET username = $1, 
                email = $2, 
                password = $3
            WHERE id = $4
            `, [username, email, password, req.params.id]);
        res.json(result.rows[0]);
    }
    catch(error){
        console.error(error);       
        res.status(500).json({error:`Internal server error`});
    }
}
//DELETE user
const deleteUser = async(req,res)=>{
    const{id} = req.params.id;
    try{
        const result = await pool.query(`
            DELETE FROM users
            WHERE id = $1
            `, [id]);
        res.json(result.rows[0]);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:`Internal server error`});
    }
}
module.exports = {getUsers, getUserById, createUser, editUser, deleteUser}; 