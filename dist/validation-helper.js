"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const compiler_1 = require("@sinclair/typebox/compiler");
//
//
//
function validateSchema(schema, data) {
    //
    const compiler = compiler_1.TypeCompiler.Compile(schema);
    const valid = compiler.Check(data);
    if (!valid) {
        throw new Error(JSON.stringify(compiler.Errors(data).First()));
    }
    return;
}
exports.validateSchema = validateSchema;
