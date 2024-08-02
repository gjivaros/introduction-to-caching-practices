import { existsSync, readFileSync } from 'node:fs';
import { AppConfig } from '../configurations-types';
import { nbVal, strVal } from '@paroi/data-formatters-lib';

export function readConfiguration(path: string): AppConfig {
  const fileExist = existsSync(path);

  if (!fileExist) throw new Error(`file '${path}' not found`);

  const file = readFileSync(path, 'utf-8');

  const json = JSON.parse(file);

  return {
    thisServer: {
      appName: strVal(json.thisServer.appName, { varName: 'thisServer.appName' }),
      port: nbVal(json.thisServer.port, { varName: 'thisServer.port' })
    },
    database: {
      uri: strVal(json.database.uri, { varName: 'database.uri' })
    },
    redis: {
      port: nbVal(json.redis.port, { varName: 'redis.port' }),
      url: strVal(json.redis.url, { varName: 'redis.url' })
    }
  };
}
