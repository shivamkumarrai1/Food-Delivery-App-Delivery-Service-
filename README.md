# 🚚 Delivery Agent Service - Food Delivery App

This is the **Delivery Agent Service** for the Food Delivery App backend, built with **Node.js**, **Express**, and **Prisma**. It handles management of delivery agents and assignment of agents to orders received from the Restaurant Service.

---

## 📁 Project Structure

delivery-service/
├── prisma/ # Prisma schema and migration files
├── src/
│ ├── controllers/ # Route handler logic
│ ├── routes/ # Route definitions
│ ├── services/ # Business logic
│ ├── utils/ # Helper functions
│ ├── app.ts # Express app
│ └── server.ts # Entry point
├── .env # Environment variables
├── package.json
└── tsconfig.json

yaml
Copy
Edit

---

## 🧪 Features

- Register and manage delivery agents
- Toggle agent availability
- Assign nearest available delivery agent to orders
- Update delivery status

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js >= 18.x
- PostgreSQL database
- Prisma installed globally (`npm install -g prisma`)

### 📥 Clone and Setup

```bash
git clone https://github.com/shivamkumarrai1/Food-Delivery-App-Delivery-Service.git
cd Food-Delivery-App-Delivery-Service
npm install

⚙️ Environment Variables
Create a .env file in the root:

DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<db_name>
PORT=5002

🔃 Run Migrations

npx prisma generate
npx prisma migrate deploy
🏁 Start the Server

# For production
npm run build
node dist/server.js

# For development
npm run dev
npm start

📡 API Endpoints
📍 Health Check

GET /api/health
🚚 Delivery Agent Management
✅ Register Agent

POST /api/agent
Body:
{
  "name": "John Doe",
  "phone": "9876543210"
}
🔄 Toggle Availability

PUT /api/agent/:agentId/status
🗂️ Agent Assignment & Delivery
📦 Assign Agent to Order

POST /api/assign
Body:
{
  "orderId": 123,
  "restaurantLocation": "Delhi"
}
Response:
json
{
  "agentId": 1,
  "name": "John Doe",
  "assignedAt": "2025-05-28T14:00:00Z"
}
🚚 Update Delivery Status

PUT /api/delivery/:orderId/status
Body:
{
  "status": "PICKED_UP" | "DELIVERED"
}
🧪 Testing (Optional)
Use Postman or cURL to test endpoints. For automated tests, integrate with Jest or Supertest.

📦 Deployment (Render Example)
Set the following in Render dashboard:

Build Command: npm run build

Start Command: node dist/server.js
