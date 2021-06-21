import openDB from '../../../helpers/openDB';

export default async function getAllEmails(req , res){
     if(req.method !== "GET"){
        res.status(500).json({message: "Inertnal Server Error"})
     } 

     const db = await openDB();
     const emails = await db.all(`SELECT * from EMAILS`);
     res.json(emails)
 }