import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { MateriaInput } from 'src/app/_models/materiaInput';
import { Materia } from 'src/app/_models/materias';
import { MateriasService } from 'src/app/_services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: [],
  providers: [DatePipe, MateriasService],
})
export class MateriasComponent implements OnInit {
  listaMaterias: Materia[] = [];
  listaMateriasSelect: Materia[] = [];
  materiaSeleccionado: MateriaInput = new MateriaInput();

  constructor(private materiasService: MateriasService) {}

  ngOnInit(): void {
    this.materiasService
      .getMaterias()
      .pipe(first())
      .subscribe((data) => {
        this.listaMateriasSelect = data;
        this.listaMaterias = data;
      
      });
  }

  findMateria(): void {
      this.materiasService
        .getMateriasById(this.materiaSeleccionado.idMateria)
        .pipe(first())
        .subscribe((data) => (this.listaMaterias = data));
  }

  capturarId($event: any): void {
    let idSeleccionado = $event.target.options[$event.target.options.selectedIndex].value;
    this.materiaSeleccionado.idMateria = Number(idSeleccionado);
  }
}
