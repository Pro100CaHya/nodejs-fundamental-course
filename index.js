import { Application } from "./framework/Application.js";
import { usersRouter } from "./src/users/users.router.js";
import { parseJsonMiddleware } from "./framework/parseJson.js";

const app = new Application();

const PORT = process.env.PORT || 5000;

app.use(parseJsonMiddleware);
app.addRouter(usersRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));