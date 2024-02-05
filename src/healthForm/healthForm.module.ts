import { Module } from '@nestjs/common';

import { HealthFormResolver } from './healthForm.resolver';
import { HealthFormService } from './healthForm.service';
import { PrismaService } from 'nestjs-prisma';

@Module({
  exports: [HealthFormService],
  providers: [HealthFormResolver, HealthFormService, PrismaService],
})
export class HealthFormModule {}
