import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'

})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }


  nombreValido(): boolean {
    return this.miFormulario?.controls['producto'].invalid
    && this.miFormulario?.controls['producto'].touched;
  }


  precioValido(): boolean{
    return this.miFormulario?.controls['precio'].invalid
    && this.miFormulario?.controls['precio'].touched;
  }

  existenciasValida():boolean {
    return this.miFormulario?.controls['existencias'].invalid
    && this.miFormulario?.controls['existencias'].touched;
  }









  ngOnInit(): void {
  }
  // guardar( miFormulario: NgForm ) {
  guardar(miFormulario: NgForm) {
    // console.log( this.miFormulario );
    console.log('Posteo correcto');
    console.log(miFormulario.value)


  }
}
