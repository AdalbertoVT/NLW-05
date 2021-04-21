import { Router } from "express";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController"
import { UserController } from "./controller/UserController";


const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const messagesController = new MessagesController();



routes.post("/settings", settingsController.create);
routes.post("/users", userController.create)

routes.post("/message", messagesController.create)
routes.get("/message/:id", messagesController.showByUser);

export { routes }