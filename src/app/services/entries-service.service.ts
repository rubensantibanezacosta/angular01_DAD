import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../models/Entry';
@Injectable({
  providedIn: 'root'
})
export class EntriesServiceService {

  endpoint: string = "http://localhost:3000/entries";
  constructor(private httpCllient: HttpClient) { }

  getEntries(): Observable<Entry[]> {
    return this.httpCllient.get<Entry[]>(this.endpoint)
  }
}
