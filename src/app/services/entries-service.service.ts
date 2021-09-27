import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entry } from '../interfaces/Entry';
@Injectable({
  providedIn: 'root'
})
export class EntriesServiceService {

  endpoint: string = "http://localhost:3000/entries";
  constructor(private httpClient: HttpClient) { }

  getEntries(): Observable<entry[]> {
    return this.httpClient.get<entry[]>(this.endpoint)
  }
  deleteEntry(id:number){
    console.log(id);
    return this.httpClient.delete(this.endpoint+'/'+id+'/').subscribe((res)=>{
      console.log(res)
    })
  }

}
