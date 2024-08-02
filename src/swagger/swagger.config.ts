import { join } from 'path';
import { appConfig, packageDir } from '../context';

const modulePath = join(packageDir, 'src', 'modules');

export const swaggerConfig = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: `${appConfig.thisServer.appName} API with Swagger`,
      version: '0.1.0',
      description: `${appConfig.thisServer.appName} api documentation`,
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Jivaros',
        url: 'https://github.com/gjivaros',
        email: 'jivarosgbeto@gmail.com'
      }
    },
    servers: [
      {
        url: `http://localhost:${appConfig.thisServer.port}`
      }
    ]
  },
  apis: [join(modulePath, 'provider', 'provider.swagger.ts'), join(modulePath, 'billing', 'billing.swagger.ts')]
};
