import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/Classes/alumno';
import { DetallesAlumno } from 'src/app/Classes/detalles-alumno';
import { ServicioService } from 'src/app/Services/servicio.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  alumno:Alumno = new Alumno();
  detallesAlumno:DetallesAlumno = new DetallesAlumno();

  alertaBien:Boolean = false; // para que aparezca la alerta de "creado correctamente"
  alertaMal:Boolean = false; // para que aparezca la alerta de "error al crear"

  error!:string;

  constructor(private service:ServicioService, private router:Router){}

  ngOnInit(): void {
      this.alumno.detallesAlumno = this.detallesAlumno;
      this.alumno.habilitado = 1; // para que aparezca en la lista y no en la papelera
  }

  nuevo(){
    this.service.nuevo(this.alumno).subscribe(
      dato=>{
        this.alertaMal = false; // para eliminar la alerta de "error al crear" cuando esté bien
        console.log(this.alumno)
        this.alertaBien = true; // true para que aparezca la alerta de "creado correctamente"
        this.alumno = new Alumno() 
        setTimeout(() => {
          this.alertaBien = false;
        }, 3000); // El temporizador se ejecutará en 3 segundos
        this.alumno = new Alumno(); // Para vaciar los inputs
        this.detallesAlumno = new DetallesAlumno() // Para vaciar los inputs
        this.ngOnInit(); // Para volver a iniciar, sino no se envian los detalles ni el habilitado
        
      },
      err=>{
        this.alertaMal = true; // true para que aparezca la alerta de "error al crear"
        console.log(err);
        return this.error = err.message;
      }
    )
  }

}
