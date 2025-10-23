import { PersonsService } from "./persons.service";
declare class CreatePersonDto {
    nom: string;
    prenom: string;
    nombreSalles: number;
}
export declare class PersonsController {
    private readonly persons;
    constructor(persons: PersonsService);
    create(body: CreatePersonDto): {
        success: boolean;
        person: import("./persons.service").Person;
    };
    getOne(id: number): {
        success: boolean;
        message: string;
        person?: undefined;
    } | {
        success: boolean;
        person: import("./persons.service").Person;
        message?: undefined;
    };
    getRooms(nbsalle: number, idperson: number): {
        success: boolean;
        message: string;
    } | {
        person: import("./persons.service").Person;
        rooms: {
            roomNumber: number;
            content: string;
            patient: {
                id: number;
                nom: string;
                prenom: string;
            };
        }[];
        success: boolean;
        message?: undefined;
    };
}
export {};
