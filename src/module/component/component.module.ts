import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ComponentResolver } from './component.resolver';

@Module({
  providers: [ComponentService, ComponentResolver]
})
export class ComponentModule {}
