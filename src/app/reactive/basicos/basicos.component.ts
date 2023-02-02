import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  
  

  // myForm: FormGroup = new FormGroup({
  //   nombre : new FormControl('Prueba de vinculacion'),
  //   precio: new FormControl(5),
  //   existencias: new FormControl(2)
  // })
  myForm: FormGroup= this.fb.group({
    nombre:['Patatas', [Validators.required, Validators.minLength(3)]],
    precio:[10, [Validators.required, Validators.min(5), Validators.max(200)]],
    existencias:[5, [Validators.required, Validators.min(5), Validators.max(200)]]
  })

 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Tomates',
    existencias: 500}
    )
  }

  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }
   
    console.log(this.myForm.value)
    
  }
}

