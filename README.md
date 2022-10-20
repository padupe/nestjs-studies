# Estudos com o framework [NestJS](http://nestjs.com/)
> Módulo Básico

## Requisitos
- NodeJS
- NPM

## Plataforma
[Udemy](https://www.udemy.com/)

## Curso
[NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger](https://www.udemy.com/course/nestjs-do-zero/)

### Instrutor
[Jorge Aluizio Alves de Souza](https://www.udemy.com/user/jorge-aluizio-alves-de-souza/)

## Comandos Úteis

- 1 Instalação do NestJS
```bash
npm i -g @nestjs/cli
```

- 2 Criando um projeto com NestJS
```bash
nest new {name-project}
```

- 3 Para criar um _module_
```bash
nest generate module {name-module}
```
ou
```bash
nest g module {name-module}
```

- 4 Para criar um _controller_
```bash
nest generate controller {name-controller}
```
ou
```bash
nest g controller {name-controller}
```

  - 4.1 Para criar um _controller_ sem o arquivo de testes
  ```bash
  nest g controller {name-controller} --no-spec
  ```

  - 4.2 Para ciar um _controller_ em uma estrutura de pastas diferente do que o NestJS oferece
  ```bash
  nest g controller {directory}/{name-controller}
  ```

  - 4.3 Para validar, antes de criar um _controller_, em uma estrutura de pastas diferente do que o NestJS oferece. Ou seja, "experimentar"
  ```bash
  nest g controller {directory}/{name-controller} --dry-run
  ```