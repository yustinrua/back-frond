import { type Routes, RouterModule } from "@angular/router"
import { AdminEstudiantesComponent } from "./components/admin-estudiantes/admin-estudiantes.component"
import { NuevoEstudianteComponent } from "./components/nuevo-estudiante/nuevo-estudiante.component"
import { AdminMateriasComponent } from "./components/admin-materias/admin-materias.component"
import { MateriasComponent } from "./components/materias/materias.component"
import { GruposComponent } from "./components/grupos/grupos.component"
import { EvaluacionesComponent } from "./components/evaluaciones/evaluaciones.component"
import { InformesComponent } from "./components/informes/informes.component"

const APP_ROUTES: Routes = [
  { path: "adminEstudiantes", component: AdminEstudiantesComponent },
  { path: "nuevoEstudiante", component: NuevoEstudianteComponent },
  { path: "adminMaterias", component: AdminMateriasComponent },
  { path: "materias", component: MateriasComponent },
  { path: "grupos", component: GruposComponent },
  { path: "evaluaciones", component: EvaluacionesComponent },
  { path: "informes", component: InformesComponent },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true })
