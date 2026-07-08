import express from 'express'

const router = express.Router();

router.get("/hello",(req,res)=>{
    res.json({msg:"Hello from src/route/movie"})
})

export default router