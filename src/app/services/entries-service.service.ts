import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entry } from '../interfaces/Entry';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class EntriesServiceService {

  

  endpoint: string = "http://localhost:3000/entries";
  constructor(private httpClient: HttpClient) { }

  getEntries(): Observable<entry[]> {
    return this.httpClient.get<entry[]>(this.endpoint)
  }

  getEntry(id:number): Observable<entry> {
    return this.httpClient.get<entry>(this.endpoint, { params: {id} })
  }

  createEntry(body:entry):Observable<any>{
    return this.httpClient.post(this.endpoint, JSON.stringify(body), httpOptions)
  }

  updateEntry(body:entry){
    return this.httpClient.put(this.endpoint, JSON.stringify(body), httpOptions )
  }

  deleteEntry(id:number){
    return this.httpClient.delete(this.endpoint+"/"+id);
  }

}
