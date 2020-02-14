import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class PersonService {  
  
  private baseUrl = 'http://localhost:8080/person-management/api/v1/';  
  
  constructor(private http:HttpClient) { }  
  
  getPersonList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'person/list'); 
  }  
  
  createPerson(person: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'person', person);  
  }  
  
  deletePerson(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/person/${id}`, { responseType: 'text' });  
  }  
  
  getPerson(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/person/${id}`);  
  }  
  
  updatePerson(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/person/${id}`, value);  
  }  
    
}  