import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/Classes/alumno';
import { DetallesAlumno } from 'src/app/Classes/detalles-alumno';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'app-papelera',
  templateUrl: './papelera.component.html',
  styleUrls: ['./papelera.component.css']
})
export class PapeleraComponent implements OnInit{

  alumnos:Alumno[] = [];
  alumnoId:Alumno = new Alumno; 
  detallesDelAlumno:DetallesAlumno = new DetallesAlumno;

  constructor(private service:ServicioService, router:Router){}

  ngOnInit(): void {
      this.listarPapelera();
      this.alumnoId.detallesAlumno = this.detallesDelAlumno;
  }

  listarPapelera(){
    this.service.papelera().subscribe(
      dato=>{this.alumnos = dato},
      err=>{console.log(err)}
    )
  }
  
  detallesId(id:number){ // para mostrar los detalles por cada id
    this.service.buscarId(id).subscribe(
      dato=>{
        this.alumnoId = dato},
      err=>{console.log(err)}
    )
  }

  eliminar(id:number){
    this.service.eliminar(id).subscribe(
      dato=>{
        this.listarPapelera();
      },
      err=>{alert("ERRORROROROROROOROROR")}
    )
  }

  restaurar(id:number){
    this.service.habilitar(id).subscribe(
      dato=>{this.listarPapelera()},
      err=>{console.log(err)}
    )
  }

  editar(id:number, alumno:Alumno){
    this.service.editar(id, alumno).subscribe(
      dato=>{
        alert("Bien") // mejorar el alert
        this.listarPapelera()
      },
      err=>{alert("mal")}
    )
  }

}
