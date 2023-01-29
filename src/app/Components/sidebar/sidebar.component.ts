import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/Classes/alumno';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  
  alumno!: Alumno;

  constructor(private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    
  }

}
