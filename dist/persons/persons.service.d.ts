export type Person = {
    id: number;
    nom: string;
    prenom: string;
    nombreSalles: number;
};
export declare class PersonsService {
    private persons;
    private idSeq;
    create(nom: string, prenom: string, nombreSalles: number): Person;
    findOne(id: number): Person | undefined;
    getRoomsPayload(nbsalle: number, idperson: number): {
        person: Person;
        rooms: {
            roomNumber: number;
            content: string;
            patient: {
                id: number;
                nom: string;
                prenom: string;
            };
        }[];
    } | null;
}
