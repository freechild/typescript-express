import express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path'
import logger  =  require('morgan');
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import { IndexRoute } from "../routes/index.js"

export default class Server{
    public app: express.Application;

    public static bootstrap():Server{
        return new Server();
    }

    constructor(){
        //create expressjs application
        this.app = express();
        
         //configure application
        this.config();

        //add routes
        this.routes();

        //add api
        this.api();
    }

    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {
        //empty for now
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        //add static paths
        this.app.use(express.static('dist'));
        // console.log('path = ' + path.resolve(__dirname, "dist"))
        //configure pug
        // this.app.set("views", path.join(__dirname, "views"));        
        this.app.set("view engine", "pug");

        //use logger middlware
        this.app.use(logger('dev'));

        //use json form parser middlware
        this.app.use(bodyParser.json());

        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        //use override middlware
        this.app.use(methodOverride());

        //catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        //error handling
        this.app.use(errorHandler());        
    }

    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    public routes() {
        let router:express.Router;
        router = express.Router();

        IndexRoute.create(router);
        this.app.use(router);
        //empty for now
    }
}

// export default Server;
