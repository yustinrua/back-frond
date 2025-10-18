import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

// Rutas
import { APP_ROUTING } from "./app.routes"
import { AppRoutingModule } from "./app-routing.module"

// Componentes
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./components/header/header.component"
import { MenuLeftComponent } from "./components/menu-left/menu-left.component"
import { AdminEstudiantesComponent } from "./components/admin-estudiantes/admin-estudiantes.component"
import { NuevoEstudianteComponent } from "./components/nuevo-estudiante/nuevo-estudiante.component"
import { AdminMateriasComponent } from "./components/admin-materias/admin-materias.component"
import { MateriasComponent } from "./components/materias/materias.component"
import { GruposComponent } from "./components/grupos/grupos.component"
import { EvaluacionesComponent } from "./components/evaluaciones/evaluaciones.component"
import { InformesComponent } from "./components/informes/informes.component"

import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLeftComponent,
    AdminEstudiantesComponent,
    NuevoEstudianteComponent,
    AdminMateriasComponent,
    MateriasComponent,
    GruposComponent,
    EvaluacionesComponent,
    InformesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
