import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Survey } from './dtos/Survey.dto';
import { SurveyService } from './Survey.service';
export declare class SurveyController implements CrudController<Survey> {
    service: SurveyService;
    constructor(service: SurveyService);
    get base(): CrudController<Survey>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Survey> | Survey[]>;
    get(req: CrudRequest): Promise<Survey>;
    create(req: CrudRequest, dto: Survey): Promise<Survey>;
    createMany(req: CrudRequest, dto: CreateManyDto<Survey>): Promise<Survey[]>;
    update(req: CrudRequest, dto: Survey): Promise<Survey>;
    replace(req: CrudRequest, dto: Survey): Promise<Survey>;
    delete(req: CrudRequest): Promise<void | Survey>;
}
