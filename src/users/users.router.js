import { Router } from "../../framework/Router.js";
import { createUser, getUsers } from "./users.controller.js";

export const usersRouter = new Router();

usersRouter.get("/users", getUsers);

usersRouter.post("/users", createUser);