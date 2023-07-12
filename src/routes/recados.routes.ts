import { Request, Router } from 'express';
import { NotesController } from '../controllers/recados.controllers';
import { UserMiddleware } from '../middlewares/user.middlewares';
import { NoteMiddleware } from '../middlewares/recados.middlewares';

export const noteRoutes = () => {
  const app = Router({
    mergeParams: true,
  });

  app.get(
    '/',
    [UserMiddleware.validateUserExists],
    new NotesController().listNotes
  );

  app.post(
    '/',
    [NoteMiddleware.validateFieldsCreate],
    new NotesController().createNote
  );

  app.delete('/:id', new NotesController().deleteNote);

  app.put(
    '/:id',
    new NotesController().updateNote
  );

  return app;
};