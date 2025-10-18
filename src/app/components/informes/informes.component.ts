import { Component, type OnInit } from "@angular/core"
import  { InformesService } from "../../_services/informes.service"
import  { Informe } from "../../_models/informe"

@Component({
  selector: "app-informes",
  templateUrl: "./informes.component.html",
  styleUrls: [],
})
export class InformesComponent implements OnInit {
  informes: Informe[] = [
    {
      idInforme: 1,
      titulo: "Informe Académico Primer Periodo",
      tipo: "Académico",
      fechaGeneracion: new Date("2024-03-30"),
      descripcion: "Reporte completo del rendimiento académico del primer periodo escolar.",
    },
    {
      idInforme: 2,
      titulo: "Informe de Asistencia Mensual",
      tipo: "Asistencia",
      fechaGeneracion: new Date("2024-10-31"),
      descripcion: "Registro detallado de asistencia de estudiantes durante octubre.",
    },
    {
      idInforme: 3,
      titulo: "Informe Disciplinario Trimestral",
      tipo: "Disciplinario",
      fechaGeneracion: new Date("2024-09-30"),
      descripcion: "Análisis del comportamiento estudiantil en el tercer trimestre.",
    },
    {
      idInforme: 4,
      titulo: "Informe de Evaluaciones Finales",
      tipo: "Evaluaciones",
      fechaGeneracion: new Date("2024-11-15"),
      descripcion: "Consolidado de resultados de evaluaciones finales por materia.",
    },
    {
      idInforme: 5,
      titulo: "Informe Estadístico Anual",
      tipo: "Estadístico",
      fechaGeneracion: new Date("2024-12-01"),
      descripcion: "Estadísticas generales del año escolar 2024.",
    },
    {
      idInforme: 6,
      titulo: "Informe de Rendimiento por Grupo",
      tipo: "Académico",
      fechaGeneracion: new Date("2024-10-15"),
      descripcion: "Comparativa de rendimiento entre diferentes grupos escolares.",
    },
    {
      idInforme: 7,
      titulo: "Informe de Actividades Extracurriculares",
      tipo: "Actividades",
      fechaGeneracion: new Date("2024-11-01"),
      descripcion: "Resumen de participación en actividades deportivas y culturales.",
    },
    {
      idInforme: 8,
      titulo: "Informe de Recuperaciones",
      tipo: "Académico",
      fechaGeneracion: new Date("2024-11-20"),
      descripcion: "Listado de estudiantes en proceso de recuperación académica.",
    },
    {
      idInforme: 9,
      titulo: "Informe de Matrícula",
      tipo: "Administrativo",
      fechaGeneracion: new Date("2024-01-15"),
      descripcion: "Registro de matrículas y retiros del año escolar.",
    },
    {
      idInforme: 10,
      titulo: "Informe de Convivencia Escolar",
      tipo: "Convivencia",
      fechaGeneracion: new Date("2024-11-10"),
      descripcion: "Evaluación del clima escolar y relaciones interpersonales.",
    },
  ]
  loading = false

  constructor(private informesService: InformesService) {}

  ngOnInit(): void {
    // this.cargarInformes();
  }

  cargarInformes(): void {
    this.loading = true
    this.informesService.getInformes().subscribe({
      next: (data) => {
        this.informes = data
        this.loading = false
      },
      error: (error) => {
        console.error("Error al cargar informes:", error)
        this.loading = false
      },
    })
  }
}
