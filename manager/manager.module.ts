import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';


@Module({
  imports: [TypeOrmModule.forFeature([Manager, Role, User])],
  controllers: [ManagerController, RoleController],
  providers: [ManagerService, RoleService],
})
export class ManagerModule {}


