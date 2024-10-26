import { Controller, Get, Post, Body, Param, Delete, Put, } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() body: any) {
    return await this.userService.create(body);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('ten')
  async findTen() {
    return await this.userService.findTen();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return await this.userService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
