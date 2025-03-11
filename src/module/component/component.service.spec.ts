import { Test, TestingModule } from '@nestjs/testing';
import { ComponentService } from './component.service';
import { PrismaService } from '@/infra/prisma/prisma.service';

const prismaMock = {
  component: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
  },
};

describe('ComponentService', () => {
  let componentService: ComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComponentService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    componentService = module.get<ComponentService>(ComponentService);

    prismaMock.component.findUnique.mockClear();
    prismaMock.component.findMany.mockClear();
  });

  describe('getComponentListById', () => {
    it('should return component list if exists', async () => {
      const componentList = [
        {
          bomref: 'bomref-1',
          purl: 'purl-1',
          name: 'Component 1',
          version: '1.0.0',
          vulns_id: 'vulns-1',
          fixed_version: '1.0.1',
          id: 'uuid-1',
        },
        {
          bomref: 'bomref-2',
          purl: 'purl-2',
          name: 'Component 2',
          version: '2.0.0',
          vulns_id: 'vulns-2',
          fixed_version: '2.0.1',
          id: 'uuid-1',
        }
      ]

      const id = 'uuid-1'

      prismaMock.component.findMany.mockResolvedValue(componentList);

      const result = await componentService.getComponentListById('uuid-1')
      console.log(result)
      expect(prismaMock.component.findMany).toHaveBeenCalledWith({ where: { id } });
      expect(result).toEqual(componentList);
      // expect(prismaMock.component.findMany).toBeCalledTimes(1);
      // expect(prismaMock.component.findMany).toBeCalledWith({});
    });
  });
});
