import express, { Application, NextFunction, Request, Response } from 'express';


// Initializers
const app: Application = express();

// Settings
app.set('port', 3000);

// Middlewares

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!!!');
});

// Statics Files 

// Starting the server
app.listen(app.get('port'), () => console.log(`Server Running on port: ${app.get('port')}`));
