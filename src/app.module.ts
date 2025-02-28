import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloBaseDriver } from '@nestjs/apollo/dist/drivers/apollo-base.driver';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig> ({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), './schema.gql')
    })
  ],
})
export class AppModule {}
