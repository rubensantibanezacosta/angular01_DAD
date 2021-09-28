import { Component, OnInit } from '@angular/core';
import { entry } from 'src/app/interfaces/Entry';
import { EntriesServiceService } from 'src/app/services/entries-service.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public Entries:Array<entry> =[];



  constructor(private entriesService:EntriesServiceService) { 
    
  }

  ngOnInit(): void {
    this.loadInfo();
    
  }
  ngOnChanges():void{
    this.loadInfo();
  }
  loadInfo(){
    this.entriesService.getEntries().subscribe((res:Array<entry>)=>{
      this.Entries=res;
    })
  }
  deleteItem(id:number){
    console.log(id);
    this.entriesService.deleteEntry(id).subscribe((res)=>{
      console.log(res);
      this.loadInfo();
    });
    
    
  }

}

export default EntryComponent;