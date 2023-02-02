import { Component, OnInit } from '@angular/core';

interface Persona {
  genero: string;
  notificaciones: boolean;
}



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  persona: Persona = {
    genero: '',
    notificaciones: true
  };

  

  terminos: boolean = false;

  onChange(){
  
  }

  save(){
    console.log('Enviado');
    
  }

}
