import express, { Router, Request, Response } from "express";
const router = Router();

router.get('/aboutMe', (req: Request, res: Response) => {
    const msg : any = {
        'slackUsername':'Ebuka.js.tsc',
        'backend': true,
        'age': 29,
        'bio': 'I am a Nodejs Developer with Over 3 Years of experience'
    }
    res.status(200).json(msg)
})

export default router;




