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

  api.get('/test', (req, res) => {
    //const file = fs.readdir(path.join(__dirname, '../scripts/test.ps1'));

    let spawn = require('child_process').spawn,
      child;

    child = spawn('pwsh', [path.join(__dirname, '../scripts/test.ps1')]);

    child.stdout.on('data', function(data) {
      console.log('Powershell Data: ' + data);
    });
    child.stderr.on('error', function(data) {
      console.log('Powershell Errors: ' + data);
    });
    child.on('exit', function() {
      console.log('Powershell Script finished');
      res.send('Powershell script finished');
    });
    child.stdin.end(); //end input
  });

  return api;
};
