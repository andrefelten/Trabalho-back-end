import { Router } from 'express';
import { UserController } from '../controllers/user.controllers';
import { UserMiddleware } from '../middlewares/user.middlewares';
import { noteRoutes } from './recados.routes';

export const appRoutes = () => {
  const app = Router();

  app.get('/login', new UserController().list);

  app.post(
    '/',
    [UserMiddleware.validateUserEmail, UserMiddleware.validateUserPassword],
    new UserController().create
  );

  app.post('/login', new UserController().login);

  app.use('/:email/notes', noteRoutes());

  return app;
};