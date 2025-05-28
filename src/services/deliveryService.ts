import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAvailableAgents = async () => {
    return await prisma.deliveryAgent.findMany({
        where: { isAvailable: true },
    });
};

export const updateStatus = async (orderId: number, status: string) => {
    return await prisma.delivery.updateMany({
        where: { orderId },
        data: { status },
    });
};
