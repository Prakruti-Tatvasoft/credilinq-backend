import { InputType } from '@nestjs/graphql';
import { Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateHealthFormInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  companyUEN: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  position: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  phone: string;
}
