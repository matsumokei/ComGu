import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateComponentInput {
    @Field()
    @IsNotEmpty()
    bomref: string;

    @Field()
    purl: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    version: string;

    @Field()
    vulns_id: string;

    @Field()
    fixed_version: string;
}