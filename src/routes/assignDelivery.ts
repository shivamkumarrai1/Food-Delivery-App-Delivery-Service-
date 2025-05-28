import express from "express";
import { assignDeliveryAgent, makeAgentAvailable } from "../controllers/deliveryController";

const router = express.Router();

router.post("/", (req, res) => {
    assignDeliveryAgent(req, res);
});
// For makeAgentAvailable
router.post("/agents/available", (req, res) => {
    makeAgentAvailable(req, res);
});


export default router;
