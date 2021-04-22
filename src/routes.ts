import { Router } from 'express';

import { SettingsController } from "./controller/SettingsController";
import { UserController } from './controller/UserController';
import { MessagesController } from './controller/MessagesController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UserController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.create);

routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes };