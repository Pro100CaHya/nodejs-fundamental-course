import { Router } from "../../framework/Router.js";

export const usersRouter = new Router();

const users = [
    {
        id: 1,
        name: "Alex"
    },
    {
        id: 2,
        name: "Ivan"
    },
    {
        id: 3,
        name: "Kolya"
    }
];

usersRouter.get("/users", (req, res) => {
    res.send(users);
});

usersRouter.post("/users", (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(user);
});