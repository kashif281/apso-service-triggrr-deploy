"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Response_dto_1 = require("./dtos/Response.dto");
const Response_controller_1 = require("./Response.controller");
const Response_service_1 = require("./Response.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('ResponseController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Response_service_1.ResponseService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Response_controller_1.ResponseController],
            providers: [Response_service_1.ResponseService, ApiServiceProvider],
        }).compile();
        controller = module.get(Response_controller_1.ResponseController);
        spyService = module.get(Response_service_1.ResponseService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call ResponseController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call ResponseController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Response_dto_1.Response();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Response.controller.spec.js.map