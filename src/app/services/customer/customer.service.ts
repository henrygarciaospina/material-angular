import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private endpoint: string='localhost:9090/api/customers'; 
  
  private httpOptions= { headers: new HttpHeaders().set( 'Content-Type', 'application/json' ) };
  constructor(private http: HttpClient) { }



  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.endpoint}`,this.httpOptions);
  }
}
