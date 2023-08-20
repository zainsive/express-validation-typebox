"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.bodySchema = typebox_1.Type.Object({
    firstName: typebox_1.Type.String(),
    lastName: typebox_1.Type.Optional(typebox_1.Type.String()),
    age: typebox_1.Type.Number({ minimum: 0 }),
});
