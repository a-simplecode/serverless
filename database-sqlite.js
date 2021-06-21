const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {

    try {
        
        const db = await sqlite.open({ filename :'./mydb.sqlite', driver: sqlite3.cached.Database});
        await db.migrate({ force: 'last' }) //just in development means last version

    } catch (error) {
        console.log("=======>", error.message)
    }

}

setup();