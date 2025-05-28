import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import {
    findAvailableAgents,
    updateStatus,
} from "../services/deliveryService";

export const getAvailableAgents = async (_req: Request, res: Response) => {
    const agents = await findAvailableAgents();
    res.json(agents);
};

export const updateDeliveryStatus = async (req: Request, res: Response) => {
    const { orderId, status } = req.body;
    const delivery = await updateStatus(orderId, status);
    res.json(delivery);
};

export const assignDeliveryAgent = async (req: Request, res: Response) => {
    try {
        const freeAgent = await prisma.deliveryAgent.findFirst({
            where: { isAvailable: true },
        });

        if (!freeAgent) {
            return res.status(404).json({ message: "No free agent available" });
        }

        await prisma.deliveryAgent.update({
            where: { id: freeAgent.id },
            data: { isAvailable: false },
        });

        res.json(freeAgent);
    } catch (error) {
        console.error("Error assigning delivery agent", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const makeAgentAvailable = async (req: Request, res: Response) => {
    const { agentId } = req.body;

    if (!agentId || typeof agentId !== "number") {
        return res.status(400).json({ message: "Invalid or missing agentId" });
    }

    try {
        const agent = await prisma.deliveryAgent.update({
            where: { id: agentId },
            data: { isAvailable: true },
        });

        res.json({ message: "Agent marked as available", agent });
    } catch (error) {
        console.error("Error updating agent availability", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


