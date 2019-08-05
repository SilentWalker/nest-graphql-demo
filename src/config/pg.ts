import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'graphql',
  entities: ['src/**/*.entity.ts'],
  logging: ['query', 'error'],
}

export default config
