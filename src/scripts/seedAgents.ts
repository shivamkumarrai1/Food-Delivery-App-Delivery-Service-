// src/scripts/seedAgents.ts

import { prisma } from "../lib/prisma";

async function seedAgents() {
    try {
        // Clear existing agents (optional)
        await prisma.deliveryAgent.deleteMany();

        // Create sample agents
        await prisma.deliveryAgent.createMany({
            data: [
                { name: "Agent A", isAvailable: true },
                { name: "Agent B", isAvailable: true },
                { name: "Agent C", isAvailable: true }, // busy
            ],
        });

        console.log("Delivery agents seeded successfully.");
    } catch (error) {
        console.error("Error seeding delivery agents:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedAgents();
