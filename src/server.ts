import app from "./app";

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Delivery Agent Service running on port ${PORT}`);
});

console.log('💡 server.ts file is being executed...');
