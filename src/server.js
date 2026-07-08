import express from 'express'

const app = express()
const port  = 5000

app.get('/hello',(req,res)=>{
    res.json({
        msg:"Hi there bro"
    })
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    
})