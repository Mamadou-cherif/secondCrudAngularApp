import { Injectable } from '@angular/core';
import  {Personne} from "src/app/models/personne"
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class ConfigService {
  
 


   private baseUrl="http://localhost:8080/personne";

  constructor(private http: HttpClient) { }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>('http://localhost:8080/personne').pipe(
      map(response => response)
    )
  }


  savePersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.baseUrl, personne);
  }

  getPersonne(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.baseUrl}/${id}`).pipe(
      map(response => response)
    )
  }

  /* I think my Cross Police issue is cause by this issue */
   
  deletePersonne(id: number): Observable<any> {
    
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }




}
