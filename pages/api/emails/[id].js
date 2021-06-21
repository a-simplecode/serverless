import openDB from '../../../helpers/openDB';

export default async function getEmailById(req, res) {
    const db = await openDB();

    if (req.method === "PUT") {
        await db.run(
            'UPDATE EMAILS SET firstName = ?, lastName = ?, email = ?,emailTo = ?, ' +
            'subject = ?, body = ? where id = ?',
            [
                req.body.firstName ?? "",
                req.body.lastName ?? "",
                req.body.email ?? "",
                req.body.emailTo ?? "",
                req.body.subject ?? "",
                req.body.body ?? "",
                req.query.id
            ],
            function (err) {
                if (err) {
                    return console.error(err.message);
                }
                console.log(`Row(s) updated: ${this.changes}`);

            }
        );
    }
    const emails = await db.get(`SELECT * from EMAILS where id = ?`, [req.query.id]);
    res.json(emails)
}