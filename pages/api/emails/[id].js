export default function getEmailById(req, res){

     res.json({byId: req.query.id, message: "getEmailById"})
 }