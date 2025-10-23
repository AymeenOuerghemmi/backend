import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { IsInt, IsNotEmpty, Min } from "class-validator";

class CreatePersonDto {
  @IsNotEmpty()
  nom!: string;

  @IsNotEmpty()
  prenom!: string;

  @IsInt()
  @Min(1)
  nombreSalles!: number;
}

@Controller()
export class PersonsController {
  constructor(private readonly persons: PersonsService) {}

  @Post("persons")
  create(@Body() body: CreatePersonDto) {
    const p = this.persons.create(body.nom, body.prenom, body.nombreSalles);
    return { success: true, person: p };
  }

  @Get("persons/:id")
  getOne(@Param("id", ParseIntPipe) id: number) {
    const p = this.persons.findOne(id);
    if (!p) return { success: false, message: "Person not found" };
    return { success: true, person: p };
  }

  // Dynamic API: /:nbsalle/:idperson
  @Get(":nbsalle/:idperson")
  getRooms(
    @Param("nbsalle", ParseIntPipe) nbsalle: number,
    @Param("idperson", ParseIntPipe) idperson: number
  ) {
    const payload = this.persons.getRoomsPayload(nbsalle, idperson);
    if (!payload) return { success: false, message: "Person not found" };
    return { success: true, ...payload };
  }
}
