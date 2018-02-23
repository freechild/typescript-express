"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
/**
 * / route
 *
 * @class User
 */
class IndexRoute extends route_1.BaseRoute {
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    static create(router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");
        //add home page route
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
        router.get("/test", (req, res, next) => {
            new IndexRoute().test(req, res, next);
        });
    }
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }
    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    index(req, res, next) {
        //set custom title
        this.title = "Home | Tour of Heros";
        //set options
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        //render template
        this.render(req, res, "index", options);
    }
    test(req, res, next) {
        //set custom title
        this.title = "test";
        //set options
        let options = {
            "message": "test",
            "test": "param"
        };
        //render template
        this.render(req, res, "test", options);
    }
}
exports.IndexRoute = IndexRoute;