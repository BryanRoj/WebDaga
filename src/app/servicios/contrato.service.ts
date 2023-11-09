import { Injectable } from '@angular/core';
import { Icontrato } from '../modelo/Contrato/Icontrato';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  URL:string = "/contratoDaga";
  apiUrl: any;

  constructor(private http:HttpClient, private globalService:GlobalService) {
    this.URL = this.globalService.getUrl() + this.URL;
  }
//Listado
  getContrato = () => {
    let header = new HttpHeaders().set('Type-content','application/json');
    return this.http.get(this.URL, {headers : header})
  }

  postContrato = (data:Icontrato) => {
    return this.http.post<Icontrato>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }

  deleContrato = (id:number) => {
    return this.http.delete<Icontrato>(`${this.URL}/${id}`)
    .pipe(map((emp)=>id));
  }

  putContrato = (data:Icontrato) => {
    return this.http.put<Icontrato>(this.URL,data)
    .pipe(map((emp)=>data)); // importar de rxjs
  }
}
