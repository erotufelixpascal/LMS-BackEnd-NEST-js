import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { env } from './env';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';

const entities = [User, Role];

// DB_TYPE switches the dialect; host/port/credentials come from the
// matching block in .env (DB_* for postgres, DATABASE_* for mssql).
const connectionOptions: DataSourceOptions =
  env.db.type === 'mssql'
    ? {
        ...env.db,
        entities,
        synchronize: true,
        logging: true,
        options: { encrypt: false, trustServerCertificate: true },
      }
    : {
        ...env.db,
        entities,
        synchronize: true,
        logging: true,
      };

export const AppDataSource = new DataSource(connectionOptions);
