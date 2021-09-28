import { Component, OnInit, ViewChild } from '@angular/core';
import { entry } from 'src/app/interfaces/Entry';
import { EntriesServiceService } from 'src/app/services/entries-service.service';
import  EntryComponent  from './entry/entry.component';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 @ViewChild(EntryComponent) p!:EntryComponent;
  constructor(private entriesService:EntriesServiceService){}
    entriesCount:number=0;

  ngOnInit(): void {
    
    
  }
  createEntry(){
    this.entriesService.getEntries().subscribe((res:Array<entry>)=>{ 
      
      res.length>0?
      this.entriesCount=res.length+1:
      this.entriesCount=1;
      
      let entry:entry=
      {
        "id": this.entriesCount,
        "title": `titulo${this.entriesCount}`,
        "abstract": `Descripcion${this.entriesCount}`
      }

      this.entriesService.postEntry(entry).subscribe(
        this.p.loadInfo
      );
      
      
    })
    

  }
  

}
