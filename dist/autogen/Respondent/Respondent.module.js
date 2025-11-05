"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RespondentModule = void 0;
const common_1 = require("@nestjs/common");
const Respondent_entity_1 = require("./Respondent.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Respondent_service_1 = require("./Respondent.service");
const Respondent_controller_1 = require("./Respondent.controller");
let RespondentModule = class RespondentModule {
};
exports.RespondentModule = RespondentModule;
exports.RespondentModule = RespondentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Respondent_entity_1.Respondent])],
        providers: [Respondent_service_1.RespondentService],
        exports: [Respondent_service_1.RespondentService],
        controllers: [Respondent_controller_1.RespondentController],
    })
], RespondentModule);
//# sourceMappingURL=Respondent.module.js.map