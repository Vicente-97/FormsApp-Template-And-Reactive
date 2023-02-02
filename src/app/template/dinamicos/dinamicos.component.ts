import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;
  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}

  constructor() { }

  ngOnInit(): void {
  }
  nombreValido(campo:string): boolean {
    return this.myForm?.controls[campo].invalid
    && this.myForm?.controls[campo].touched;
  }

   nombre: string="";


  delete(i:number){
    this.persona.favoritos.splice(i,1)
  }

  add(){
    if (this.nombre.trim()){

    const favorite:Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nombre
    }
    this.persona.favoritos.push({...favorite});
    this.nombre='';
  
  }
}


  save() {
    console.log('formulario posteado');
  }
}
