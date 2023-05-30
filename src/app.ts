import express,{Request,Response} from 'express';
const app= express();
app.use(express.json());

app.get('/',(req:Request,res: Response)=>{
    return res.send('Hello Shine')
})

app.post('/api/data',(req,res)=>{
    const b  =req.body
    console.log(b)
   return res.send(req.body)
})

app.listen(8000,()=> console.log('App running at 8000'))