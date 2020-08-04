import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import ConnectionsController from '../app/controllers/ConnectionsController';

const connectionRouter = Router();
const connectionController = new ConnectionsController();

connectionRouter.get('/', connectionController.index);

connectionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.number().required(),
    },
  }),
  connectionController.create,
);

export default connectionRouter;
