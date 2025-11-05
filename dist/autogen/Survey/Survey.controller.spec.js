"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Survey_dto_1 = require("./dtos/Survey.dto");
const Survey_controller_1 = require("./Survey.controller");
const Survey_service_1 = require("./Survey.service");
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
describe('SurveyController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Survey_service_1.SurveyService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Survey_controller_1.SurveyController],
            providers: [Survey_service_1.SurveyService, ApiServiceProvider],
        }).compile();
        controller = module.get(Survey_controller_1.SurveyController);
        spyService = module.get(Survey_service_1.SurveyService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call SurveyController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call SurveyController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Survey_dto_1.Survey();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Survey.controller.spec.js.map