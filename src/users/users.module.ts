import { Module } from '@nestjs/common';
import { UsersModuleController } from './users.controller';
import { UsersModuleService } from './users.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [UsersModuleController],
  providers: [UsersModuleService, PrismaService],
})
export class UsersModule {}
