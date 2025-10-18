import { Component, type OnInit } from "@angular/core"

interface Estudiante {
  codigo: string
  tipoDoc: string
  numeroDoc: string
  nombre: string
  grado: number
  grupo: string
  estado: string
}

@Component({
  selector: "app-admin-estudiantes",
  templateUrl: "./admin-estudiantes.component.html",
  styleUrls: [],
})
export class AdminEstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [
    {
      codigo: "2024001",
      tipoDoc: "TI",
      numeroDoc: "1088234567",
      nombre: "Ana María González López",
      grado: 10,
      grupo: "A",
      estado: "En curso",
    },
    {
      codigo: "2024002",
      tipoDoc: "TI",
      numeroDoc: "1088345678",
      nombre: "Carlos Andrés Martínez Silva",
      grado: 10,
      grupo: "A",
      estado: "En curso",
    },
    {
      codigo: "2024003",
      tipoDoc: "TI",
      numeroDoc: "1088456789",
      nombre: "Laura Sofía Rodríguez Pérez",
      grado: 11,
      grupo: "B",
      estado: "En curso",
    },
    {
      codigo: "2024004",
      tipoDoc: "CC",
      numeroDoc: "1088567890",
      nombre: "Diego Fernando Ramírez Castro",
      grado: 11,
      grupo: "A",
      estado: "En curso",
    },
    {
      codigo: "2024005",
      tipoDoc: "TI",
      numeroDoc: "1088678901",
      nombre: "María Camila Torres Vargas",
      grado: 9,
      grupo: "C",
      estado: "En curso",
    },
    {
      codigo: "2024006",
      tipoDoc: "TI",
      numeroDoc: "1088789012",
      nombre: "Juan Pablo Hernández Mora",
      grado: 10,
      grupo: "B",
      estado: "Retirado",
    },
    {
      codigo: "2024007",
      tipoDoc: "TI",
      numeroDoc: "1088890123",
      nombre: "Valentina Gómez Ruiz",
      grado: 9,
      grupo: "A",
      estado: "En curso",
    },
    {
      codigo: "2024008",
      tipoDoc: "CC",
      numeroDoc: "1088901234",
      nombre: "Sebastián López Jiménez",
      grado: 11,
      grupo: "C",
      estado: "En curso",
    },
    {
      codigo: "2024009",
      tipoDoc: "TI",
      numeroDoc: "1088012345",
      nombre: "Isabella Fernández Ortiz",
      grado: 10,
      grupo: "C",
      estado: "En curso",
    },
    {
      codigo: "2024010",
      tipoDoc: "TI",
      numeroDoc: "1088123456",
      nombre: "Mateo Sánchez Díaz",
      grado: 9,
      grupo: "B",
      estado: "En curso",
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
