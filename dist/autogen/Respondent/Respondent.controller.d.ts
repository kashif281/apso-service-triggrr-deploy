import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Respondent } from './dtos/Respondent.dto';
import { RespondentService } from './Respondent.service';
export declare class RespondentController implements CrudController<Respondent> {
    service: RespondentService;
    constructor(service: RespondentService);
    get base(): CrudController<Respondent>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Respondent> | Respondent[]>;
    get(req: CrudRequest): Promise<Respondent>;
    create(req: CrudRequest, dto: Respondent): Promise<Respondent>;
    createMany(req: CrudRequest, dto: CreateManyDto<Respondent>): Promise<Respondent[]>;
    update(req: CrudRequest, dto: Respondent): Promise<Respondent>;
    replace(req: CrudRequest, dto: Respondent): Promise<Respondent>;
    delete(req: CrudRequest): Promise<void | Respondent>;
}
