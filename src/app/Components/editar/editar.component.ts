import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/Classes/alumno';
import { DetallesAlumno } from 'src/app/Classes/detalles-alumno';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  alumnos:Alumno[] = [];
  alumno:Alumno = new Alumno();
  detallesAlumno: DetallesAlumno = new DetallesAlumno();

  alertaMal!:Boolean
  alertaBien!:Boolean
  error!:string;

  constructor(private router:Router, private service:ServicioService){}

  ngOnInit(): void {
      this.listarTodos();
      this.alumno.detallesAlumno = this.detallesAlumno;
  }

  listarTodos(){
    this.service.buscarTodos().subscribe(
      dato=>{
        this.alumnos = dato 
        console.log(dato)
      },
      err=>{console.log(err)}
    )
  }

  cargarDatos(id:number){
    alert("hola")
    this.service.buscarId(id).subscribe(
      dato=>{
        this.alumno = dato;
        console.log(this.alumno);
      },
      err=>{console.log(err)}
    )
  }

  editar(){

  }

}
