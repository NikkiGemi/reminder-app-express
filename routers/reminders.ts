import { Router } from "express";
import createReminderDTO from "../dtos/createReminder";
import Reminder from "../models/reminder";

const routes = Router();
const reminders: createReminderDTO[] = [];

routes.get("/", (req, res) => {
  res.status(200).send(reminders);
});

routes.post("/", (req, res) => {
  const { title } = req.body as createReminderDTO;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).send(reminder);
});

export default routes;
