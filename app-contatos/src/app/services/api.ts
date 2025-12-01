import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://jsonplaceholder.typicode.com/users'; 

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.url);
  }
}