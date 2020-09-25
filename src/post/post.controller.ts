import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Controller('post')
export class PostController {

  @Get()
  getMany() {
    return 'OK';
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {

    return {
      message: 'getOne'
    };
  }

  @Post()
  createOne(
    @Body() dto: CreatePostDto
  ) {
    return dto;
  }

  @Put(':id')
  editOne(@Param('id') id: string) {}

  @Delete(':id')
  deleteOne(@Param('id') id: string) {}



}
