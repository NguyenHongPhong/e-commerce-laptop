// Get the client
import mysql from 'mysql2/promise';


// Create the connection to database
async function getConnection() {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "240700",
        database: 'e-commerce-laptop',
    });

    return connection;
};

export default getConnection;


