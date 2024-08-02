import { createClient, RedisClientType, RedisFunctions, RedisModules, RedisScripts } from 'redis';

class RedisClient {
  #client!: RedisClientType<RedisModules, RedisFunctions, RedisScripts>;

  async init() {
    const client = createClient();
    client.on('error', console.error);
    await client.connect();
    this.#client = client;
  }

  get client() {
    if (!this.#client) throw new Error('client not initialize');
    return this.#client;
  }
}

export const redisClient = new RedisClient();

export type AppRedis = typeof redisClient;
