import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import ClassController from '../app/controllers/ClassController';

const classesRouter = Router();
const classController = new ClassController();

classesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      week_day: Joi.string().required(),
      subject: Joi.string().required(),
      time: Joi.string().required(),
    },
  }),
  classController.index,
);

classesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      avatar: Joi.string().required(),
      whatsapp: Joi.string().required(),
      bio: Joi.string().required(),
      subject: Joi.string().required(),
      cost: Joi.number().required(),
      schedule: Joi.array().required(),
    },
  }),
  classController.create,
);

export default classesRouter;
