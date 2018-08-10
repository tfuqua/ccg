import { Router } from 'express';

export default ({ config }) => {
  let api = Router();

  api.get('/', (req, res) => {
    res.json({ version: config.version });
  });

  return api;
};
