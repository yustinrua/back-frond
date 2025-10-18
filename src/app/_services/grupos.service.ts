import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Grupo } from "../_models/grupo";

@Injectable({
  providedIn: "root",
})
export class GruposService {
  private baseUrl = "http://localhost:8081/servicesRest/WsColegio";

  constructor(private http: HttpClient) {}

  getGrupos() {
    return this.http.get<Grupo[]>(`${this.baseUrl}/getGrupos`).pipe(
      map((grupos) => grupos)
    );
  }

  getGrupoById(idGrupo: number) {
    return this.http.post<Grupo>(`${this.baseUrl}/getGrupoById`, { idGrupo }).pipe(
      map((grupo) => grupo)
    );
  }
}
