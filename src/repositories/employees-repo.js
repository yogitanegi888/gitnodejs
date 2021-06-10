const pool = require("../config/databasepool")
class EmployeeRepository {
    constructor(pool) {
        this.pool = pool;
    }
    getAllEmployees() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    connection.query("select * from emp", (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    })
                }
            })
        })
    }

}
let employeeRepo= new EmployeeRepository(pool);
module.exports = employeeRepo;