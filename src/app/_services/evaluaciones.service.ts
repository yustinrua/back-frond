import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"; 
import { Evaluacion } from "../_models/evaluacion"; 

@Injectable({
  providedIn: "root",
})
export class EvaluacionesService {
  private baseUrl = "http://localhost:8081/servicesRest/WsColegio";

  constructor(private http: HttpClient) {}

  getEvaluaciones() {
    return this.http.get<Evaluacion[]>(`${this.baseUrl}/getEvaluaciones`).pipe(
      map((evaluaciones) => evaluaciones)
    );
  }

  getEvaluacionById(idEvaluacion: number) {
    return this.http.post<Evaluacion>(`${this.baseUrl}/getEvaluacionById`, { idEvaluacion }).pipe(
      map((evaluacion) => evaluacion)
    );
  }
}
