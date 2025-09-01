import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { DataSource } from 'typeorm';

@Controller('manager')
export class ManagerController {
  constructor(
    private readonly managerService: ManagerService,
    private readonly dataSource: DataSource,
  ) {}

  @Post()
  create(@Body() createManagerDto: CreateManagerDto) {
    return this.managerService.create(createManagerDto);
  }

  @Get()
  findAll() {
    return this.managerService.findAll();
  }

  @Get('Test_db')
    async testDatabaseConnection(){
      try{
        // await this.dataSource.query('SELECT * FROM managers');
        await this.dataSource.query('select * from role');
        return {message: 'Database connection successful'};

      } catch (error){
        return {message: 'Database connection failed', error: error.message};
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
    return this.managerService.update(+id, updateManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerService.remove(+id);
  }
}
