import { query } from "../index.js";
import { affirmations } from "../../lib/data.js";

async function populateAffirmationsTable () {
for (let i =0; i < affirmations.length; i++) {
    const res = await query(`INSERT INTO affirmations (content) VALUES ($1) RETURNING *;`, [affirmations[i].content]);
    console.log (res.rows[0].content,"populated affirmations table");
}
// const res = await query(`INSERT INTO affirmations (content) VALUES ('Kazeem') RETURNING *`)
// console.log(res);

}

populateAffirmationsTable();