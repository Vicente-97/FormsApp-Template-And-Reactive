import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

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

  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}

  myForm: FormGroup= this.fb.group({
    nombre:['Patatas', [Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Suzuki', Validators.required],
      ['Yamaha', Validators.required]

    ], Validators.required)
  })


  constructor(private fb: FormBuilder) { }

  get favoritos(){
  return this.myForm.get('favoritos') as FormArray
  }

  nuevoFavorito: FormControl= this.fb.control('', Validators.required)

  add(){
    if(this.nuevoFavorito.invalid){
      return
    }
    this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  delete(i:number){
      this.favoritos.removeAt(i)
  }
  ngOnInit(): void {
  }

//   add(){
//     if (this.nombre.trim()){

//     const favorite:Favorito = {
//       id: this.persona.favoritos.length + 1,
//       nombre: this.nombre
//     }
//     this.persona.favoritos.push({...favorite});
//     this.nombre='';
  
//   }
// }

  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    
  }
 
    console.log('Enviado');
      this.favoritos.clear();
      this.myForm.reset();

}

}
