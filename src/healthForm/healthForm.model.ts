import { Field, ID, ObjectType } from '@nestjs/graphql';
import { HealthForm } from '@prisma/client';

@ObjectType('HealthForm')
export class HealthFormGqlModel implements HealthForm {
  @Field(() => ID)
  id: HealthForm['id'];

  @Field(() => String)
  companyUEN: HealthForm['companyUEN'];

  @Field(() => String)
  companyName: HealthForm['companyName'];

  @Field(() => String)
  email: HealthForm['email'];

  @Field(() => String)
  name: HealthForm['name'];

  @Field(() => String)
  position: HealthForm['position'];

  @Field(() => String)
  phone: HealthForm['phone'];

  @Field(() => [String])
  attachments: HealthForm['attachments'];

  @Field(() => Date)
  createdAtUtc: HealthForm['createdAtUtc'];

  @Field(() => Date)
  updatedAtUtc: HealthForm['updatedAtUtc'];
}
