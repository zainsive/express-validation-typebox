"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
const validation_helper_1 = require("../validation-helper");
function validateData(schema) {
    return (req, res, next) => {
        //
        try {
            //
            if (req.body && Object.keys(req.body).length > 0) {
                (0, validation_helper_1.validateSchema)(schema.body, req.body);
            }
            if (req.params && Object.keys(req.params).length > 0) {
                (0, validation_helper_1.validateSchema)(schema.params, req.params);
            }
            if (req.query && Object.keys(req.query).length > 0) {
                (0, validation_helper_1.validateSchema)(schema.queryString, req.query);
            }
            //
        }
        catch (error) {
            return res.status(400).json({
                error: `validation failed`,
                details: error.message,
            });
        }
        next();
    };
}
exports.validateData = validateData;
