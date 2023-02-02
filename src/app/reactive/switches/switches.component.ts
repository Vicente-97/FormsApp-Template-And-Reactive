import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  myForm:FormGroup = this.fb.group({
    genero:['', Validators.required],
    notificaciones:[true],
    terminos:[false, Validators.requiredTrue]
  })

  persona: Persona = {
    genero: '',
    notificaciones: true
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(({terminos, ...rest}) => {
      // this.persona.genero = values.genero
      // this.persona.notificaciones = values.notificaciones
      this.persona = rest

    })
  }

  save(){
    console.log('enviado')
  }
}
