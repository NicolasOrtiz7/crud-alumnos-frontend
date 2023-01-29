import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../Classes/alumno';

@Injectable({
  providedIn: 'root'
})
export class ServicioService implements OnInit{

  URL:string = "http://localhost:8080"
  alumno!:Alumno[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
      
  }

  buscarTodos(): Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(this.URL+"/lista");
  }
  buscarHabilitados(): Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(this.URL+"/habilitados");
  }

  buscarId(id:number): Observable<Alumno>{
    return this.httpClient.get<Alumno>(this.URL+"/"+id);
  }

  papelera(): Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(this.URL+"/papelera");
  }

  nuevo(alumno:Alumno): Observable<Alumno>{
    return this.httpClient.post<Alumno>(this.URL+"/nuevo", alumno);
  }

  editar(id:number, alumno:Alumno): Observable<Object>{
    return this.httpClient.put<Object>(this.URL+"/editar/"+id, alumno);
  }

  habilitar(id:number): Observable<Alumno>{
    return this.httpClient.put<Alumno>(this.URL+"/habilitar/"+id, this.alumno); 
  }

  deshabilitar(id:number): Observable<Alumno>{
    return this.httpClient.put<Alumno>(this.URL+"/deshabilitar/"+id, this.alumno); 
  }

  eliminar(id:number): Observable<Alumno>{
    return this.httpClient.delete<Alumno>(this.URL+"/eliminar/"+id); 
  }





}
