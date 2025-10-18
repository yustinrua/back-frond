import { Component, type OnInit } from "@angular/core"
import  { MenuService } from "../../_services/menu.service"
import  { MenuItem } from "../../_models/menuItem"

@Component({
  selector: "app-menu-left",
  templateUrl: "./menu-left.component.html",
  styleUrls: [],
})
export class MenuLeftComponent implements OnInit {
  menuItems: MenuItem[] = []
  loading = false

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.cargarMenu()
  }

  cargarMenu(): void {
    this.loading = true
    this.menuService.getMenuItems().subscribe({
      next: (data) => {
        this.menuItems = data
        this.loading = false
      },
      error: (error) => {
        console.error("Error al cargar el menú:", error)
        this.loading = false
        // Fallback to default menu if service fails
        this.cargarMenuPorDefecto()
      },
    })
  }

  cargarMenuPorDefecto(): void {
    this.menuItems = [
      { id: 1, nombre: "Estudiantes", ruta: "adminEstudiantes", icono: "fa-user-graduate", activo: true },
      { id: 2, nombre: "Grupos", ruta: "grupos", icono: "fa-users", activo: true },
      { id: 3, nombre: "Materias", ruta: "materias", icono: "fa-book", activo: true },
      { id: 4, nombre: "Evaluaciones", ruta: "evaluaciones", icono: "fa-clipboard-check", activo: true },
      { id: 5, nombre: "Informes", ruta: "informes", icono: "fa-chart-bar", activo: true },
    ]
  }
}
