import express, { Request, Response } from "express";
import {} from "@sinclair/typebox";
import { validateData } from "./middleware/validationMiddleware";
import { bodySchema } from "./schema/bodySchema";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello, server running!");
});

app.post(
  "/postRoute",
  validateData({ body: bodySchema }),
  (req: Request, res: Response) => {
    //

    res.send(req.body);
  }
);

app.listen(5000, () => {
  console.log("server started at: https://localhost/5000");
});
