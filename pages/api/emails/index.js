import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default async function getAllEmails(req , res){
     if(req.method !== "GET"){
        res.status(500).json({message: "Inertnal Server Error"})
     } 

     const db = await open({ filename :'./mydb.sqlite', driver: sqlite3.Database});
     const emails = await db.all(`SELECT * from EMAILS`);
     res.json(emails)
 }