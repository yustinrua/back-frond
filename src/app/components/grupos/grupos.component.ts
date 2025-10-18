import { Component, type OnInit } from "@angular/core"
import { GruposService } from "../../_services/grupos.service"
import  { Grupo } from "../../_models/grupo"

@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styleUrls: [],
})
export class GruposComponent implements OnInit {
  grupos: Grupo[] = [
    { idGrupo: 1, nombre: "Grupo 10-A", grado: "10", numeroEstudiantes: 32 },
    { idGrupo: 2, nombre: "Grupo 10-B", grado: "10", numeroEstudiantes: 28 },
    { idGrupo: 3, nombre: "Grupo 10-C", grado: "10", numeroEstudiantes: 30 },
    { idGrupo: 4, nombre: "Grupo 11-A", grado: "11", numeroEstudiantes: 25 },
    { idGrupo: 5, nombre: "Grupo 11-B", grado: "11", numeroEstudiantes: 27 },
    { idGrupo: 6, nombre: "Grupo 11-C", grado: "11", numeroEstudiantes: 29 },
    { idGrupo: 7, nombre: "Grupo 9-A", grado: "9", numeroEstudiantes: 35 },
    { idGrupo: 8, nombre: "Grupo 9-B", grado: "9", numeroEstudiantes: 33 },
    { idGrupo: 9, nombre: "Grupo 9-C", grado: "9", numeroEstudiantes: 31 },
    { idGrupo: 10, nombre: "Grupo 8-A", grado: "8", numeroEstudiantes: 30 },
  ]
  loading = false

  constructor(private gruposService: GruposService) {}

  ngOnInit(): void {
    // this.cargarGrupos();
  }

  cargarGrupos(): void {
    this.loading = true
    this.gruposService.getGrupos().subscribe({
      next: (data) => {
        this.grupos = data
        this.loading = false
      },
      error: (error) => {
        console.error("Error al cargar grupos:", error)
        this.loading = false
      },
    })
  }
}
