"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
const compiler_1 = require("@sinclair/typebox/compiler");
function validateData(schema) {
    return (req, res, next) => {
        const compiled = compiler_1.TypeCompiler.Compile(schema);
        const valid = compiled.Check(req.body);
        if (!valid) {
            return res.status(400).json({
                error: "Validation failed",
                details: compiled.Errors({}).First,
            });
        }
        next();
    };
}
exports.validateData = validateData;
