import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes";
import assignRoutes from "./routes/assignDelivery";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Mount delivery routes under /api/delivery
app.use("/api/delivery", deliveryRoutes);

// Mount assign routes under /api/assign
app.use("/api/assign", assignRoutes);

// Health check route
app.get("/", (req, res) => {
    res.send("Delivery service is running!");
});

export default app;

