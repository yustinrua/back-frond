import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"; // ✅ cambio aquí
import { Informe } from "../_models/informe"; // ✅ quitar 'type'

@Injectable({
  providedIn: "root",
})
export class InformesService {
  private baseUrl = "http://localhost:8081/servicesRest/WsColegio";

  constructor(private http: HttpClient) {}

 
  getInformes() {
    return this.http.get<Informe[]>(`${this.baseUrl}/getInformes`).pipe(
      map((informes) => informes)
    );
  }

 
  getInformeById(idInforme: number) {
    return this.http.post<Informe>(`${this.baseUrl}/getInformeById`, { idInforme }).pipe(
      map((informe) => informe)
    );
  }
}
