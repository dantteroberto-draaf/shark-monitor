import { Router } from "express";
import SensorController from "./controllers/SensorController.js";

const routes: Router = Router();

const sensorController = new SensorController;

routes.get("/sensores", sensorController.getAllSensores);
routes.post("/sensores", sensorController.createSensor);
routes.patch("/sensores/:id", sensorController.updateSensor);
routes.delete("/sensores/:id", sensorController.deleteSensor);
routes.get("/sensores/:id", sensorController.getSensorById);
routes.patch("/toggle-alert/:id", sensorController.toggleAlertStatus);

export default routes;