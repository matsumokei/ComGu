import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ComponentService } from './component.service';
import { Component as ComponentModel } from './model/component.model';
import { Component } from '@prisma/client';
import { CreateComponentInput } from './dto/createComponent.input';

@Resolver()
export class ComponentResolver {
    constructor(private readonly componentService: ComponentService) {};

    @Query(() => [ComponentModel], { nullable: "items"})
    async getComponentListById(
        @Args('id', { type: () => String }) id: string,
    ): Promise<Component[]> {
        return await this.componentService.getComponentListById(id);
    }

    @Mutation(() => ComponentModel)
    async createComponent(
        @Args('createComponent') createComponentInput: CreateComponentInput
    ): Promise<Component> {
        return await this.componentService.createComponent(createComponentInput);
    }
}
