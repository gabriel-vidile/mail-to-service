const Queue = require("bull");
const redisClient = require("../config/redisConfig");

const addToQueue = async (queueName, data) => {
  const queue = new Queue(queueName, {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
    },
  });
  await queue.add(data);
};

const processQueue = (queueName, processor) => {
  const queue = new Queue(queueName, {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
    },
  });
  queue.process(processor);
};

module.exports = { addToQueue, processQueue };
