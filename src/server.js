import express from 'express'
import movieRoute from "./routes/movieRoute.js"





const app = express()
const port  = 5000


app.use("/movies",movieRoute)


app.get('/hello',(req,res)=>{
    res.json({
        msg:"Hi there bro"
    })
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    
})