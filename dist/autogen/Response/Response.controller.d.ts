import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Response } from './dtos/Response.dto';
import { ResponseService } from './Response.service';
export declare class ResponseController implements CrudController<Response> {
    service: ResponseService;
    constructor(service: ResponseService);
    get base(): CrudController<Response>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Response> | Response[]>;
    get(req: CrudRequest): Promise<Response>;
    create(req: CrudRequest, dto: Response): Promise<Response>;
    createMany(req: CrudRequest, dto: CreateManyDto<Response>): Promise<Response[]>;
    update(req: CrudRequest, dto: Response): Promise<Response>;
    replace(req: CrudRequest, dto: Response): Promise<Response>;
    delete(req: CrudRequest): Promise<void | Response>;
}
