import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get('/:name')
    hello(@Param('name') name: string){
        return `Helo ${name}`
    }

    @Post()
    createProduct(@Body() payload: any){
        console.log(payload)
    }
}
