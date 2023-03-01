import { Global, Module } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
const uuidProvider = {
  useValue: uuid,
  provide: 'UUID',
};
export const Provide_Tokens = { uuid : 'UUID'}
@Global()
@Module({
  providers: [uuidProvider],
  exports: [uuidProvider],
})
export class CommonModuleModule {}