import { Injectable } from '@nestjs/common';
import { HealthForm } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class HealthFormService {
  constructor(private readonly prismaService: PrismaService) {}

  async createHealthForm(formData: any): Promise<HealthForm> {
    return await this.prismaService.healthForm.create({
      data: formData,
    });
  }

  async getAllHealthFormData(): Promise<HealthForm[]> {
    return await this.prismaService.healthForm.findMany();
  }
}
