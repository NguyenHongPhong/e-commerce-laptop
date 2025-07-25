import getConnection from "@config/database";

async function handleCreateUserService(name: string, email: string, address: string) {
    const connection = await getConnection();
    const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
    const values = [name, email, address];
    try {
        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }

};

async function getUsers() {
    const connection = await getConnection();
    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`'
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export { handleCreateUserService, getUsers };