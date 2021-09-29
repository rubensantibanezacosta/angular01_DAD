import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(private loginService: LoginService,
    private router: Router) {

    this.user = new User();
  }

  ngOnInit(): void {
  }

  public submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('userName', this.user.name);
        localStorage.setItem('personalToken', `${data}`);
        this.router.navigate(['/list']);
        
      },
      (error: Error) => {
        console.error("Error al realizar el acceso- login");
      }
    )
  }

}
