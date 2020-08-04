/* eslint-disable class-methods-use-this */
import { Request, Response, response } from 'express';
import db from '../../database/connection';

export default class ConnectionsController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async index(_: Request, res: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return res.status(200).json({ total });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id,
    });

    return res.status(201).json();
  }
}
