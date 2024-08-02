import { dirname, join } from 'node:path';
import { readConfiguration } from './helpers/app-config.helpers';

export const packageDir = dirname(__dirname);

export const appConfig = readConfiguration(join(packageDir, 'config.json'));
