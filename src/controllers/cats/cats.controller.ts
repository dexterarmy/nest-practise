import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(@Query() query:any){
        return 'return all cats'
    }
}