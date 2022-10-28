import express,{Request,Response} from 'express';
import cors from 'cors';
const app = express();
import {route} from './route/route';

app.use(cors());
app.use(express.json());

//routes
app.use('/api', route);

const PORT : any  = process.env.PORT || 3021

app.listen( PORT,() : void=>{
    console.log('server is running 3021')
})