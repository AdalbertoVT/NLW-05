import { Router } from "express";
import { SettingController, } from "./controller/SettingsController";


const routes = Router();

const SettingsController = new SettingController();

routes.post("/settings", SettingsController.create);

export { routes };