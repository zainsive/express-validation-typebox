import { Type } from "@sinclair/typebox";

export const bodySchema = Type.Object({
  firstName: Type.String(),
  lastName: Type.Optional(Type.String()),
  age: Type.Number({ minimum: 0 }),
});
