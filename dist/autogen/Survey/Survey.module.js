"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyModule = void 0;
const common_1 = require("@nestjs/common");
const Survey_entity_1 = require("./Survey.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Survey_service_1 = require("./Survey.service");
const Survey_controller_1 = require("./Survey.controller");
let SurveyModule = class SurveyModule {
};
exports.SurveyModule = SurveyModule;
exports.SurveyModule = SurveyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Survey_entity_1.Survey])],
        providers: [Survey_service_1.SurveyService],
        exports: [Survey_service_1.SurveyService],
        controllers: [Survey_controller_1.SurveyController],
    })
], SurveyModule);
//# sourceMappingURL=Survey.module.js.map