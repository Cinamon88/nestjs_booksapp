import { Module } from '@nestjs/common';
import { UsersModuleController } from './users-module.controller';
import { UsersModuleService } from './users-module.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [UsersModuleController],
  providers: [UsersModuleService, PrismaService],
})
export class UsersModuleModule {}
