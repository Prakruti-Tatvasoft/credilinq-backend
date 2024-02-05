import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as FileUpload from 'graphql-upload/Upload.js';
import * as path from 'path';
import * as fs from 'fs';
import { createWriteStream } from 'fs';
import { HealthFormService } from './healthForm.service';
import { CreateHealthFormInput } from './healthForm.input';
import { HealthFormGqlModel } from './healthForm.model';

@Resolver()
export class HealthFormResolver {
  constructor(private readonly healthFormService: HealthFormService) {}

  @Mutation(() => HealthFormGqlModel)
  async createHealthForm(
    @Args('input')
    input: CreateHealthFormInput,

    @Args({ name: 'file', type: () => [GraphQLUpload] })
    files: Promise<FileUpload>[],
  ) {
    try {
      // Check if uploads directory is exists or not. If not exist then create new directory.
      if (!fs.existsSync('./uploads')) {
        fs.mkdirSync('./uploads');
      }

      // Upload files into directory
      const filePaths = await Promise.all(
        files.map(
          async (img: Promise<FileUpload>): Promise<Promise<string>> => {
            const { filename, createReadStream } = await img;
            const stream = createReadStream();
            return new Promise((resolve, reject) => {
              stream
                .pipe(createWriteStream(`./uploads/${filename}`))
                .on('end', () => {
                  resolve('end');
                })
                .on('close', () => {
                  resolve(path.join(__dirname, `/uploads/${filename}`));
                })
                .on('error', (err) => {
                  reject(err);
                });
            });
          },
        ),
      );

      return this.healthFormService.createHealthForm({
        ...input,
        attachments: filePaths,
      });
    } catch (err) {
      throw err;
    }
  }

  @Query(() => [HealthFormGqlModel])
  retrieveHealthFormData(): Promise<HealthFormGqlModel[]> {
    return this.healthFormService.getAllHealthFormData();
  }
}
