"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Question_dto_1 = require("./dtos/Question.dto");
const Question_controller_1 = require("./Question.controller");
const Question_service_1 = require("./Question.service");
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
describe('QuestionController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Question_service_1.QuestionService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Question_controller_1.QuestionController],
            providers: [Question_service_1.QuestionService, ApiServiceProvider],
        }).compile();
        controller = module.get(Question_controller_1.QuestionController);
        spyService = module.get(Question_service_1.QuestionService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call QuestionController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call QuestionController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Question_dto_1.Question();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Question.controller.spec.js.map