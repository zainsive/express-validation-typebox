"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validationMiddleware_1 = require("./middleware/validationMiddleware");
const bodySchema_1 = require("./schema/bodySchema");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("hello, server running!");
});
app.post("/postRoute", (0, validationMiddleware_1.validateData)({ body: bodySchema_1.bodySchema }), (req, res) => {
    //
    res.send(req.body);
});
app.listen(5000, () => {
    console.log("server started at: https://localhost/5000");
});
