"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const path = __importStar(require("path"));
const logger = require("morgan");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const index_js_1 = require("../app/routes/index.js");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
        // this.app.set('view engine', 'html');
        // this.app.engine('html', require('pug').renderFile);
        // this.app.use(express.static(path.join(__dirname, 'dist')));
        // // this.app.set('views', path.join(__dirname, 'app','views'));
        // this.app.get("/", (req: express.Request,res: express.Response, next: express.NextFunction) => {
        //     res.render("../index.html");
        // });
        // this.app.get("/test", (req: express.Request,res: express.Response, next: express.NextFunction) => {
        //     res.send("hello world??");
        // });
    }
    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    api() {
        //empty for now
    }
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    config() {
        //add static paths
        console.log(__dirname);
        this.app.use(express_1.default.static(path.join(__dirname, "dist")));
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
        this.app.use(function (err, req, res, next) {
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
    routes() {
        let router;
        router = express_1.default.Router();
        index_js_1.IndexRoute.create(router);
        this.app.use(router);
        //empty for now
    }
}
exports.default = Server;
// export default Server;
