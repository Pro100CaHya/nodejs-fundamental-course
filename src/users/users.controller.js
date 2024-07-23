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

export const getUsers = (req, res) => {
    if (req.params.id) {
        return res.send(
            users.find((user) => user.id == req.params.id)
        );
    };
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
}