import express ,{Application,Request,Response} from "express";
import { join } from "path";
const app:Application = express()
// let data= require('./data.json')
// app.use(express.json());


app.get('/users',(req:Request,res:Response)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json =>  res.send(json))

   


})


// app.delete('/',(req:Request,res:Response)=>{

//     let det= data.pop();
// console.log(data);
//     res.json({det})


// })

// app.post('/',(req:Request,res:Response)=>{

//     let add= data.push({name: req.body.name,age:req.body.age});
// console.log(data);
//     res.json({add})


// })

// app.put('/:id/:name/:age',(req:Request,res:Response)=>{
//     data[req.params.id].name=data[req.params.id].name=req.params.name;
//     data[req.params.id].age=data[req.params.id].age =req.params.age;
//     console.log(data);
// res.send(data)



// })





app.listen(3000,()=>console.log('Express started'));


