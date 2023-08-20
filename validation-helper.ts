import { TypeCompiler } from "@sinclair/typebox/compiler";
//
//
//

export function validateSchema(schema: any, data: any) {
  //
  const compiler = TypeCompiler.Compile(schema);
  const valid = compiler.Check(data);

  if (!valid) {
    throw new Error(JSON.stringify(compiler.Errors(data).First()));
  }
  return;
}
