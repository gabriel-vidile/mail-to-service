const redis = require("redis");
require("dotenv").config();

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

redisClient.on("error", (err) => {
  console.error("Erro ao conectar ao Redis:", err);
});

module.exports = redisClient;
