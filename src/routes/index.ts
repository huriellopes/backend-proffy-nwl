import { Request, Response, Router } from 'express';

import classesRouter from './classes.routes';
import connectionRouter from './connections.routes';

const routes = Router();

// Método de teste da api
routes.get('/test', (_: Request, res: Response) => {
  res.json({ message: 'Server is working!' });
});

routes.use('/classes', classesRouter);
routes.use('/connections', connectionRouter);

export default routes;
