import express from 'express';
import { appConfig } from './context';
import swaggerjson from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import { swaggerConfig } from './swagger/swagger.config';
import { json } from 'body-parser';
import { ProviderController } from './modules/provider/provider.controller';
import { redisClient } from './modules/redis/redis.service';

async function main() {
  const app = express();

  app.use(json());

  const specs = swaggerjson(swaggerConfig);

  app.use('/providers', ProviderController);
  app.use('/docs', swaggerui.serve, swaggerui.setup(specs));

  await redisClient.init();

  app.listen(appConfig.thisServer.port, () => {
    console.info(`app '${appConfig.thisServer.appName}' is running on port '${appConfig.thisServer.port}'`);
  });
}

main().catch(console.error);
