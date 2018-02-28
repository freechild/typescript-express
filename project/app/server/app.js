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
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var logger = require("morgan");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var index_js_1 = require("../routes/index.js");
var Server = /** @class */ (function () {
    function Server() {
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    Server.prototype.api = function () {
        //empty for now
    };
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    Server.prototype.config = function () {
        //add static paths
        this.app.use(express_1.default.static('dist'));
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
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
    };
    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    Server.prototype.routes = function () {
        var router;
        router = express_1.default.Router();
        index_js_1.IndexRoute.create(router);
        this.app.use(router);
        //empty for now
    };
    return Server;
}());
exports.default = Server;
// export default Server;
