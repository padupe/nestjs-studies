import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CourseEntity } from './entities/course.entity'

@Injectable()
export class CoursesService {
    private courses: CourseEntity[] = [
        {
            id: 1,
            name: 'Fundamentos do framework NestJS',
            description:
                'Curso com os fundamentos para uso do framework NestJS',
            tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
        },
    ]

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const course = this.courses.find(
            (course: CourseEntity) => course.id === Number(id)
        )

        if (!course) {
            throw new HttpException(
                `Course ID ${id} not found!`,
                HttpStatus.NOT_FOUND
            )
        }
    }

    create(createCourseDTO: any) {
        return this.courses.push(createCourseDTO)
    }

    update(id: string, updateCourseDTO: any) {
        const indexCourse = this.courses.findIndex(
            (course) => course.id === Number(id)
        )

        if (indexCourse >= 0) {
            this.courses[indexCourse] = updateCourseDTO
        }
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(
            (course) => course.id === Number(id)
        )

        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        }
    }
}
