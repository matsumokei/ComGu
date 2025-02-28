import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class Component {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    version: string;

    @Field()
    purl: string;
}
