import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common'
import { CoursesService } from './courses.service'

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    findAll() {
        return this.coursesService.findAll()
    }

    // Podemos ter uma requisição com parâmetros.
    @Get(':id')
    /*
        Utilizamos o decorator @Param para indicar o parâmetro que
        deve ser considerado na requisição
    */
    findOne(@Param('id') id: string) {
        return this.coursesService.findOne(id)
    }
    /*
        Mesma rota utilizando desestruturação
        findOne(@Param('id') id: string) {
            return `Curso ${id}`
        }
    */

    // Dados enviados no corpo da requisição, ou seja, o body.
    @Post()
    create(@Body('name') body) {
        return this.coursesService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.coursesService.update(id, body)
    }
    /*
        Mesma rota utilizando desestruturação
        findOne(@Param('id') id: string) {
            return `Curso ${id}`
        }
    */

    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return this.coursesService.remove(id)
    }
}
