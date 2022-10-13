import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { personaDto } from '../Models/personaDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  data :personaDto;

  constructor(private http: HttpClient) { }


  insert(registro: personaDto){

    return this.http.post("http://localhost:8080/registrar/informeSimple", JSON.stringify(registro), { headers: this.getHeaders() })

  }

  loger(login: any): Observable<any>  {

    return this.http.post("http://localhost:8080/registrar/login", JSON.stringify(login), { headers: this.getHeaders() })

  }

  dato( data : personaDto){
    this.data = (data);
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }



}
