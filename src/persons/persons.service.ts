import { Injectable } from "@nestjs/common";

export type Person = {
  id: number;
  nom: string;
  prenom: string;
  nombreSalles: number;
};

@Injectable()
export class PersonsService {
  private persons = new Map<number, Person>();
  private idSeq = 1;

  create(nom: string, prenom: string, nombreSalles: number): Person {
    const p: Person = { id: this.idSeq++, nom, prenom, nombreSalles };
    this.persons.set(p.id, p);
    return p;
  }

  findOne(id: number): Person | undefined {
    return this.persons.get(id);
  }

  // Génère des patients différents par salle (déterministes)
  getRoomsPayload(nbsalle: number, idperson: number) {
    const person = this.persons.get(idperson);
    if (!person) return null;

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
}
