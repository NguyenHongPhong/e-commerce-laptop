import express, { Express } from 'express';
import { getHomePage, getCreateUser, handleCreateUser, handleDeleteUser } from 'controllers/UserController';
const router = express.Router()

function WebRouter(app: Express) {
    router.get('/', getHomePage);
    router.get('/create-user', getCreateUser);
    router.post('/handle-create-user', handleCreateUser);
    router.delete('/handle-delete/:id', handleDeleteUser);
    return app.use('/', router);
};

export default WebRouter;

