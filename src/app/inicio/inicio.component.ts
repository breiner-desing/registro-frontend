import { Component, OnInit } from '@angular/core';
import { personaDto } from '../Models/personaDto';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  logeado : personaDto;

  constructor(private service : AppService) { }

  ngOnInit(): void {
    this.logeado = this.service.data
  }

}
