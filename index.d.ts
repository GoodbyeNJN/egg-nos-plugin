import { NosClient, NosClientOptions } from '@xgheaven/nos-node-sdk';

declare module 'egg' {
  interface Application {
    nos: NosClient
  }

  interface Context {
    nos: NosClient
  }

  interface EggAppConfig {
    nos: NosClientOptions
  }
}
