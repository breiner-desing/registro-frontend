import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;

  constructor(public formBuilder: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      correo: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])),
      contrasenia: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  valid(campo: string) {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }

  enviar() {


  }

  redirec() {
    this.router.navigate(['registrar'])

  }

  logguer() {
    this.service.loger(this.formulario.value).subscribe(resp => {
      if (resp.status == 200 && resp.payload) {
        console.log(resp.payload)
        this.service.dato(resp.payload[0]);
        this.router.navigate(['inicio'])
      }
    })

  }

}
