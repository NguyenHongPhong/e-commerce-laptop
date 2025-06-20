import { Request, Response } from 'express';
import { getUsers, handleCreateUserService } from '@services/user-service';

async function getHomePage(req: Request, res: Response) {
    const users = await getUsers();

    return res.render('page', {
        users
    });
};

function getCreateUser(req: Request, res: Response) {
    return res.render('page/create-user');
};

async function handleCreateUser(req: Request, res: Response) {
    const { name, email, address } = req.body;
    await handleCreateUserService(name, email, address);
    return res.redirect('/');
};

function handleDeleteUser(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    return res.redirect('/');
}


export { getHomePage, getCreateUser, handleCreateUser, handleDeleteUser }