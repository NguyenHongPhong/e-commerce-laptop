import express, { Express } from 'express';
import { getHomePage, getCreateUser, handleCreateUser } from '../controllers/UserController';
const router = express.Router()

function WebRouter(app: Express) {
    router.get('/', getHomePage);
    router.get('/create-user', getCreateUser);
    router.post('/handle-create-user', handleCreateUser);
    return app.use('/', router);
};

export default WebRouter;

