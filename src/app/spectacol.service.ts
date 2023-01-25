import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Spectacol {
  id?: number;
  nume?: string;
  nrLocuri?: number;
  dataStart?: Date;
  dataFinal?:Date;
  intervale?: IntervalOrar[];
}

export interface IntervalOrar {
  id?: number;
  zi?: Date;
  ora?: string;
  rezervari?: Rezervare[];
}

export interface Rezervare {
  id?: number;
  nrLoc?: number;
  email?: string;
  telefon?: string;
}



@Injectable({
  providedIn: 'root'
})
export class SpectacolService {
  saveInterval(selectedInterval: any) {
    return this.http.put(`http://localhost:8080/intervale/${selectedInterval.id}`, selectedInterval).toPromise();
  }

  removeInterval(id: number) {
    return this.http.delete(`http://localhost:8080/intervale/${id}`).toPromise();
  }
 

  getSpectacole(): any {
    return this.http.get("http://localhost:8080/spectacole").toPromise();
  }

  saveSpectacol(spectacol: Spectacol, method:string) {
    if(method == 'insert'){
      return this.http.post("http://localhost:8080/spectacole", spectacol).toPromise();
    }else{
      return this.http.put(`http://localhost:8080/spectacole/${spectacol.id}`, spectacol).toPromise();
    }
  }
  
  removeSpectacol(id: any) {
    return this.http.delete(`http://localhost:8080/spectacole/${id}`).toPromise();
  }

  getByIdSpectacol(id: number) {
    return this.http.get(`http://localhost:8080/spectacole/${id}`).toPromise();
  }

  constructor(private http:HttpClient) { }
}
