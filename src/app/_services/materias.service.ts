import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { MateriaInput } from '../_models/materiaInput';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
constructor(private http: HttpClient) {}


  getMaterias() {
    return this.http
      .get<any>('http://localhost:8081/servicesRest/WsColegio/getMaterias')
      .pipe(
        map((materia) => {
          return materia;
        })
      );
  }

  getMateriasById(idMateria: number) {
    return this.http
      .post<any>(
        'http://localhost:8081/servicesRest/WsColegio/getMateriasById',
        idMateria
      )
      .pipe(
        map((materia) => {
          return materia;
        })
      );
  }

  getMateriasByIdJson(materiaInput: MateriaInput) {
    return this.http
      .post<any>(
        'http://localhost:8081/servicesRest/WsColegio/getMateriasByIdJson',
        { idMateria: materiaInput.idMateria }
      )
      .pipe(
        map((materia) => {
          return materia;
        })
      );
  }
}
