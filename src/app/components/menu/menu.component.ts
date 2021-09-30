import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {
  public miToken: number;
  public userName: string | null;
 

  constructor(private router: Router) { 
  this.miToken = 0;
this.userName = "";
}

ngOnInit(): void {
  if (localStorage.getItem('personalToken')) {
    this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
    this.userName = localStorage.getItem('userName');
    }
}
async Refresh(){ 
};

public logout(): void {
  if (localStorage.getItem('personalToken')) {
  this.Refresh()
  .then(()=>localStorage.removeItem('personalToken'))
  .then(()=>this.miToken=0)
  .then(()=>this.router.navigate(['/login']))
  .catch((err)=>{console.log(err)})
  
  ;
  }
  }

}
