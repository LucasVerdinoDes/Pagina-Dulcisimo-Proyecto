var pool = require('./bd');

async function getFotos() {

    var query = "select * from fotos order by id asc";
    var rows = await pool.query(query);
    return rows;
}
async function deleteFotosById(id) {
    var query = "delete from fotos where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertFotos(obj) {
    try {
        var query = "insert into fotos set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getFotosById(id) {
    var query = 'select * from fotos where id =?';
    var rows = await pool.query(query,[id]);
    return rows[0];
}


module.exports = { getFotos, deleteFotosById, insertFotos, getFotosById}