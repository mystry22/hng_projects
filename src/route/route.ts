import express from 'express';
export const route = express.Router();
import request from './request';

route.use(request);

