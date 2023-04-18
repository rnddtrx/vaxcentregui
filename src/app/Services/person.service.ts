import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDto } from '../Model/person-dto';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:8080/api/persons/';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<PersonDto[]> {
    return this.http.get<PersonDto[]>(this.apiUrl);
  }

  getPersonById(id: number): Observable<PersonDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PersonDto>(url);
  }

  postPerson(person: PersonDto): Observable<PersonDto> {
    return this.http.post<PersonDto>(this.apiUrl, person);
  }

  deletePerson(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  putPerson(id: number, person: PersonDto): Observable<PersonDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<PersonDto>(url, person);
  }

  findByLastnameAndFirstname(person: PersonDto): Observable<PersonDto[]> {
    const url = `${this.apiUrl}findByLastnameAndFirstname`;
    return this.http.post<PersonDto[]>(url, person);
  }

}
