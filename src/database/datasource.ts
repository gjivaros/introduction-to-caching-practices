import sqlite from 'better-sqlite3';
import { appConfig } from '../context';

export const datasource = sqlite(appConfig.database.uri, { fileMustExist: false });
