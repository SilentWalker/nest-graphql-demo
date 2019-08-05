import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import pgConfig from './config/pg'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(pgConfig),
    SharedModule,
    CoreModule,
  ],
})
export class ApplicationModule {}
