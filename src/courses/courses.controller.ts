import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Res,
} from '@nestjs/common'

@Controller('courses')
export class CoursesController {
    @Get()
    // Podemos manipular o Status Code das respostas, utilizando o decorator @Res()
    findAll(@Res() response) {
        // Ao utilizar o decorator, podemos passar o statusCode
        return response.status(200).send('Listagem de cursos')
    }

    // Podemos ter uma requisição com parâmetros.
    @Get(':id')
    /*
        Utilizamos o decorator @Param para indicar o parâmetro que
        deve ser considerado na requisição
    */
    findOne(@Param() params) {
        return `Curso ${params.id}`
    }
    /*
        Mesma rota utilizando desestruturação
        findOne(@Param('id') id: string) {
            return `Curso ${id}`
        }
    */

    // Dados enviados no corpo da requisição, ou seja, o body.
    @Post()
    // Decorator para tratamento de StatusCode
    @HttpCode(HttpStatus.NO_CONTENT)
    // Podemos passar apenas o valor do Status
    // @HttpCode(204)
    create(@Body('name') body) {
        return body
    }
    /*
        Podemos passar também os atributos que queremos capturar
        create(@Body('name') body) {
            return body
        }
    */

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualização do Curso ${id}`
    }
    /*
        Mesma rota utilizando desestruturação
        findOne(@Param('id') id: string) {
            return `Curso ${id}`
        }
    */

    @Delete(':id')
    deleteById(@Param('id') id: string) {
        return `Exclusão do curso ${id}`
    }
}
