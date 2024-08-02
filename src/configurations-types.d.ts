export interface AppConfig {
  thisServer: ThisServer;
  database: DatabaseConf;
  redis: RedisConf;
}

interface ThisServer {
  appName: string;
  port: number;
}

interface DatabaseConf {
  uri: string;
}

interface RedisConf {
  port: number;
  url: string;
}
