import express from "express";
import reminderRoutes from "./routers/reminders";
const app = express();
app.listen(3000, () => console.log("listening on port 3000..."));

app.use(express.json());
app.use("/reminders", reminderRoutes);
