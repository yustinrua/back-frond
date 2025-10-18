import { Component, type OnInit } from "@angular/core"
import { EvaluacionesService } from "../../_services/evaluaciones.service"
import  { Evaluacion } from "../../_models/evaluacion"

@Component({
  selector: "app-evaluaciones",
  templateUrl: "./evaluaciones.component.html",
  styleUrls: [],
})
export class EvaluacionesComponent implements OnInit {
  evaluaciones: Evaluacion[] = []
  loading = false

  private datosPrueba: Evaluacion[] = [
    {
      idEvaluacion: 1,
      nombre: "Examen Final Matemáticas",
      tipo: "Examen",
      fecha: new Date("2024-11-15"),
      nombreMateria: "Matemáticas",
      idMateria: 0
    },
    {
      idEvaluacion: 2,
      nombre: "Quiz Física Cuántica",
      tipo: "Quiz",
      fecha: new Date("2024-11-20"),
      nombreMateria: "Física",
      idMateria: 0
    },
    {
      idEvaluacion: 3,
      nombre: "Trabajo Escrito Historia",
      tipo: "Trabajo",
      fecha: new Date("2024-11-25"),
      nombreMateria: "Historia",
      idMateria: 0
    },
    {
      idEvaluacion: 4,
      nombre: "Parcial Química Orgánica",
      tipo: "Parcial",
      fecha: new Date("2024-12-01"),
      nombreMateria: "Química",
      idMateria: 0
    },
    {
      idEvaluacion: 5,
      nombre: "Exposición Literatura",
      tipo: "Exposición",
      fecha: new Date("2024-12-05"),
      nombreMateria: "Literatura",
      idMateria: 0
    },
    {
      idEvaluacion: 6,
      nombre: "Laboratorio Biología",
      tipo: "Laboratorio",
      fecha: new Date("2024-12-08"),
      nombreMateria: "Biología",
      idMateria: 0
    },
    {
      idEvaluacion: 7,
      nombre: "Examen Inglés Avanzado",
      tipo: "Examen",
      fecha: new Date("2024-12-10"),
      nombreMateria: "Inglés",
      idMateria: 0
    },
    {
      idEvaluacion: 8,
      nombre: "Proyecto Programación",
      tipo: "Proyecto",
      fecha: new Date("2024-12-12"),
      nombreMateria: "Informática",
      idMateria: 0
    },
    {
      idEvaluacion: 9,
      nombre: "Quiz Geografía",
      tipo: "Quiz",
      fecha: new Date("2024-12-15"),
      nombreMateria: "Geografía",
      idMateria: 0
    },
    {
      idEvaluacion: 10,
      nombre: "Taller Educación Física",
      tipo: "Taller",
      fecha: new Date("2024-12-18"),
      nombreMateria: "Educación Física",
      idMateria: 0
    },
  ]

  constructor(private evaluacionesService: EvaluacionesService) {}

  ngOnInit(): void {
    // Opción 1: Usar datos de prueba (desarrollo)
    this.evaluaciones = this.datosPrueba

    // Opción 2: Cargar desde el servicio (producción)
    // this.cargarEvaluaciones()
  }

  cargarEvaluaciones(): void {
    this.loading = true
    this.evaluacionesService.getEvaluaciones().subscribe({
      next: (data) => {
        this.evaluaciones = data
        this.loading = false
      },
      error: (error) => {
        console.error("Error al cargar evaluaciones:", error)
        this.loading = false
      },
    })
  }
}