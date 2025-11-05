"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Respondent_dto_1 = require("./dtos/Respondent.dto");
const Respondent_controller_1 = require("./Respondent.controller");
const Respondent_service_1 = require("./Respondent.service");
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
describe('RespondentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Respondent_service_1.RespondentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Respondent_controller_1.RespondentController],
            providers: [Respondent_service_1.RespondentService, ApiServiceProvider],
        }).compile();
        controller = module.get(Respondent_controller_1.RespondentController);
        spyService = module.get(Respondent_service_1.RespondentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call RespondentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call RespondentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Respondent_dto_1.Respondent();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Respondent.controller.spec.js.map