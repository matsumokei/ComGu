import { Injectable } from '@nestjs/common';
import { Component } from '@prisma/client';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { CreateComponentInput } from './dto/createComponent.input';

@Injectable()
export class ComponentService {
    constructor(private readonly prisma: PrismaService) {}
    
    async getComponentListById(id: string): Promise<Component[]> {
        return await this.prisma.component.findMany({
                where: { id },
        });
    }

    async createComponent(createComponentInput: CreateComponentInput): Promise<Component> {
        const { bomref, purl, name, version, vulns_id, fixed_version } = createComponentInput
        return await this.prisma.component.create({
            data: { bomref, purl, name, version, vulns_id, fixed_version }
        });
    }
}
