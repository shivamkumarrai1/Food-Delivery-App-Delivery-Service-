import express from "express";
import { makeAgentAvailable } from "../controllers/deliveryController";
import {
    updateDeliveryStatus,
    getAvailableAgents,
} from "../controllers/deliveryController";

const router = express.Router();

router.get("/agents", getAvailableAgents);
router.post("/status", updateDeliveryStatus);
router.post("/agents/available", (req, res) => {
    makeAgentAvailable(req, res);
});

export default router;
