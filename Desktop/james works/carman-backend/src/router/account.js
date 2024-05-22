const express = require('express')
const account = express.Router()
const jwt = require('jsonwebtoken')

account.post("/login", (req,res)=>{
    console.log("login")
    try{
        const { username, password } = req.body
        if(!username && !password){
            return res.status(400).json({
                message: "Please field username and password"
            })
        }else{
            return res.status(200).json({                
                message: "Login Success",
                data: username
            })
        }
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

module.exports = account;