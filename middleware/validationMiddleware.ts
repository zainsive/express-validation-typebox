import { TypeCompiler } from "@sinclair/typebox/compiler";
import { NextFunction, Request, Response } from "express";
import { IValidationProps } from "./validationMiddleware.types";
import { validateSchema } from "../validation-helper";

export function validateData(schema: IValidationProps) {
  return (req: Request, res: Response, next: NextFunction) => {
    //

    try {
      //
      if (req.body && Object.keys(req.body).length > 0) {
        validateSchema(schema.body, req.body);
      }
      if (req.params && Object.keys(req.params).length > 0) {
        validateSchema(schema.params, req.params);
      }
      if (req.query && Object.keys(req.query).length > 0) {
        validateSchema(schema.queryString, req.query);
      }

      //
    } catch (error: any) {
      return res.status(400).json({
        error: `validation failed`,
        details: error.message,
      });
    }

    next();
  };
}
