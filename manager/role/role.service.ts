import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {

//   Role is your entity class (role.entity.ts).
// Repository<Role> is TypeORM’s helper that lets you query, insert, update, and delete rows in the roles table.
  // async function returns a promise
  //promise is a value that may not be available yet, but will be in the future
  //await pauses execution until the Promise resolves
  //await is only valid inside async functions
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleRepository.save(createRoleDto);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }


  async findOne(id: number): Promise<Role> {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    return this.roleRepository.save(updateRoleDto);
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
