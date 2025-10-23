"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsController = void 0;
const common_1 = require("@nestjs/common");
const persons_service_1 = require("./persons.service");
const class_validator_1 = require("class-validator");
class CreatePersonDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePersonDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePersonDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreatePersonDto.prototype, "nombreSalles", void 0);
let PersonsController = class PersonsController {
    constructor(persons) {
        this.persons = persons;
    }
    create(body) {
        const p = this.persons.create(body.nom, body.prenom, body.nombreSalles);
        return { success: true, person: p };
    }
    getOne(id) {
        const p = this.persons.findOne(id);
        if (!p)
            return { success: false, message: "Person not found" };
        return { success: true, person: p };
    }
    getRooms(nbsalle, idperson) {
        const payload = this.persons.getRoomsPayload(nbsalle, idperson);
        if (!payload)
            return { success: false, message: "Person not found" };
        return { success: true, ...payload };
    }
};
exports.PersonsController = PersonsController;
__decorate([
    (0, common_1.Post)("persons"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePersonDto]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("persons/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(":nbsalle/:idperson"),
    __param(0, (0, common_1.Param)("nbsalle", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)("idperson", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getRooms", null);
exports.PersonsController = PersonsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [persons_service_1.PersonsService])
], PersonsController);
//# sourceMappingURL=persons.controller.js.map