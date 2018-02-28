import Server from './App';
import * as express from 'express';

const port:any = process.env.PORT || 2222;
const app:express.Application = new Server().app;

app.listen(port, () => console.log(`Express server listening at ${port}`))
.on('error', err => console.error(err));
