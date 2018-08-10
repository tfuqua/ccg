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

    fs.readFile(path.join(__dirname, '../scripts/test.ps1'), (err, file) => {
      if (err) {
        console.log(err);
      }

      console.log(file);
      let spawn = require('child_process').spawn,
        child;

      child = spawn('powershell.exe', [file]);

      child.stdout.on('data', function(data) {
        console.log('Powershell Data: ' + data);
      });
      child.stderr.on('data', function(data) {
        console.log('Powershell Errors: ' + data);
      });
      child.on('exit', function() {
        console.log('Powershell Script finished');
      });
      child.stdin.end(); //end input
    });
  });

  return api;
};
