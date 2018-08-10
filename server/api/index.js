import path from 'path';
import fs from 'fs';
import { Router } from 'express';

export default ({ config }) => {
  let api = Router();

  api.get('/', (req, res) => {
    res.json({ version: config.version });
  });

  api.get('/scripts', (req, res) => {
    fs.readdir(path.join(__dirname, '../scripts'), (err, files) => {
      res.json(files);
    });
  });

  return api;
};
