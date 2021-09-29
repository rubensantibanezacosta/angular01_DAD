import { Component, OnInit } from '@angular/core';
import { entry } from 'src/app/interfaces/Entry';
import { EntriesServiceService } from 'src/app/services/entries-service.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public Entries: Array<entry> = [];
  public counter: string = "";


  constructor(private entriesService: EntriesServiceService) {

  }

  ngOnInit(): void {
    this.loadInfo();

  }

  loadInfo() {

    this.entriesService.getEntries().subscribe((res: Array<entry>) => {
      this.Entries = res;
      this.Entries.length>0?this.counter = res[res.length - 1].title.charAt(res[res.length - 1].title.length - 1):this.counter="0";
    })
  }
  deleteItem(id: number) {
    this.entriesService.deleteEntry(id).subscribe(() => {
      this.loadInfo();
    });
  }
  createEntry() {

    var add1: number;
    if (parseInt(this.counter) > 0) {
      add1 = parseInt(this.counter) + 1;
      this.counter = add1.toString();
    } else {
      this.counter = "1";
    }


    let entry: entry =
    {
      "id": parseInt(this.counter),
      "title": `titulo${this.counter}`,
      "abstract": `Descripcion${this.counter}`
    }

    this.entriesService.createEntry(entry).subscribe((res) => {
      this.loadInfo();
    }
    );
  }
}