"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseModule = void 0;
const common_1 = require("@nestjs/common");
const Response_entity_1 = require("./Response.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Response_service_1 = require("./Response.service");
const Response_controller_1 = require("./Response.controller");
let ResponseModule = class ResponseModule {
};
exports.ResponseModule = ResponseModule;
exports.ResponseModule = ResponseModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Response_entity_1.Response])],
        providers: [Response_service_1.ResponseService],
        exports: [Response_service_1.ResponseService],
        controllers: [Response_controller_1.ResponseController],
    })
], ResponseModule);
//# sourceMappingURL=Response.module.js.map