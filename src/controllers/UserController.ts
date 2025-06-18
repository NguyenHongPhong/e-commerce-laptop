import { Request, Response } from 'express';

function getHomePage(req: Request, res: Response) {
    return res.render('page');
};

function getCreateUser(req: Request, res: Response) {
    return res.render('page/create-user');
};

function handleCreateUser(req: Request, res: Response) {
    return res.redirect('/');
};


export { getHomePage, getCreateUser, handleCreateUser }