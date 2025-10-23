"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
let PersonsService = class PersonsService {
    constructor() {
        this.persons = new Map();
        this.idSeq = 1;
    }
    create(nom, prenom, nombreSalles) {
        const p = { id: this.idSeq++, nom, prenom, nombreSalles };
        this.persons.set(p.id, p);
        return p;
    }
    findOne(id) {
        return this.persons.get(id);
    }
    getRoomsPayload(nbsalle, idperson) {
        const person = this.persons.get(idperson);
        if (!person)
            return null;
        const rooms = Array.from({ length: nbsalle }).map((_, idx) => {
            const seed = (idperson * 9301 + (idx + 1) * 49297) % 233280;
            const patientId = (seed % 90000) + 10000;
            const patientFirst = [
                "Adam",
                "Alya",
                "Nour",
                "Lina",
                "Yassine",
                "Rania",
                "Marwen",
                "Nada",
                "Karim",
                "Sarra",
            ][seed % 10];
            const patientLast = [
                "Ben Ali",
                "Trabelsi",
                "Gharbi",
                "Mansour",
                "Zairi",
                "Louati",
                "Ghazzi",
                "Saidi",
                "Haddad",
                "Jemai",
            ][Math.floor(seed / 10) % 10];
            return {
                roomNumber: idx + 1,
                content: `Salle ${idx + 1} — Soins esthétiques`,
                patient: {
                    id: patientId,
                    nom: patientLast,
                    prenom: patientFirst,
                },
            };
        });
        return { person, rooms };
    }
};
exports.PersonsService = PersonsService;
exports.PersonsService = PersonsService = __decorate([
    (0, common_1.Injectable)()
], PersonsService);
//# sourceMappingURL=persons.service.js.map