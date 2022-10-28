import express,{Request,Response} from 'express';
import cors from 'cors';
const app = express();
import {route} from './route/route';

app.use(cors());
app.use(express.json());

//routes
app.use('/api', route);



app.listen('3021',() : void=>{
    console.log('server is running 3021')
})