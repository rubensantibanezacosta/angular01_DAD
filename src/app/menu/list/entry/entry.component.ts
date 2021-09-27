import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { EntriesServiceService } from 'src/app/services/entries-service.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public Entries:Array<Entry> =[];



  constructor(private entriesService:EntriesServiceService) { 
    
  }

  ngOnInit(): void {
    this.entriesService.getEntries().subscribe((res:Array<Entry>)=>{
      this.Entries=res;
    })
    
  }

}
