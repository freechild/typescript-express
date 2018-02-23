"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const port = process.env.PORT || 2222;
const app = new App_1.default().app;
app.listen(port, () => console.log(`Express server listening at ${port}`))
    .on('error', err => console.error(err));
