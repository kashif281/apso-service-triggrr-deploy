import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Question } from './dtos/Question.dto';
import { QuestionService } from './Question.service';
export declare class QuestionController implements CrudController<Question> {
    service: QuestionService;
    constructor(service: QuestionService);
    get base(): CrudController<Question>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Question> | Question[]>;
    get(req: CrudRequest): Promise<Question>;
    create(req: CrudRequest, dto: Question): Promise<Question>;
    createMany(req: CrudRequest, dto: CreateManyDto<Question>): Promise<Question[]>;
    update(req: CrudRequest, dto: Question): Promise<Question>;
    replace(req: CrudRequest, dto: Question): Promise<Question>;
    delete(req: CrudRequest): Promise<void | Question>;
}
