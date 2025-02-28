import { Test, TestingModule } from '@nestjs/testing';
import { ComponentResolver } from './component.resolver';

describe('ComponentResolver', () => {
  let resolver: ComponentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComponentResolver],
    }).compile();

    resolver = module.get<ComponentResolver>(ComponentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
