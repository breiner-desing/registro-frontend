import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  formulario: FormGroup;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  value2: string; 
  value: Date;

  constructor(public formBuilder: FormBuilder, private service : AppService, private router: Router) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([Validators.required])),
      apellido: new FormControl('', Validators.compose([Validators.required])),
      contrasenia: new FormControl('', Validators.compose([Validators.required,  Validators.minLength(8)])),
      fechaExpedicion: new FormControl('', Validators.compose([Validators.required])),
      ciudad: new FormControl('', Validators.compose([Validators.required])),
      cedula: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7) ])),
      telefoo: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/\d/), Validators.minLength(7)])),
      correo: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]))

    });
  }

  enviar() {
    console.log(this.formulario.value)
    if (this.formulario.invalid) {

      Object.values(this.formulario.controls).forEach(element => {
        if (element?.invalid && !element?.touched) {
          element.markAsTouched();
        }

      });

    }else{
    
    this.service.insert(this.formulario.value).subscribe(l=>{console.log(l)})
    this.formulario.reset();
    this.redirec()
    }

  }

  valid(campo: string) {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }

  redirec(){
    this.router.navigate(['login'])
  }

}
