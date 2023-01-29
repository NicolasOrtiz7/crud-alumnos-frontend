import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/Classes/alumno';
import { DetallesAlumno } from 'src/app/Classes/detalles-alumno';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  alumnos:Alumno[] = []; // aca se guardan todos los alumnos 

  // aca se guardan los datos al buscarPorId
  // USAR NEW porque sino no se muestran los alumnos (creo que es un problema de async) 
  alumnoId:Alumno = new Alumno; 

  detallesDelAlumno:DetallesAlumno = new DetallesAlumno; // USAR NEW porque sino los detalles no se muestran los detalles en la tabla (mismo problema que la linea anterior)

  

  constructor(private service:ServicioService, private router:Router){}

  ngOnInit(): void {
      this.listarAlumnos();
      this.alumnoId.detallesAlumno = this.detallesDelAlumno; // para que se muestren los detalles en el canvas. IMPORTANTE porque sino sale error (no se muestran en la lista o se muestran los detalles del primer alumno) 
  }

  listarAlumnos(){
    this.service.buscarHabilitados().subscribe(
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

  deshabilitar(id:number){
    this.service.deshabilitar(this.alumnoId.id).subscribe(
      dato=>{
        this.listarAlumnos();
      },
      err=>{alert("ERRORROROROROROOROROR")}
    )
  }

  editar(id:number, alumno:Alumno){
    this.service.editar(id, alumno).subscribe(
      dato=>{
        alert("Bien") // mejorar el alert
        this.listarAlumnos()
      },
      err=>{alert("mal")}
    )
  }



}
