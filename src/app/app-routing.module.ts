import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-as/about-us.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './views/login/login.component';
import { InitialGuardGuard } from './guards/initial-guard.guard';


const routes: Routes = [
  { path: 'list', canActivate: [InitialGuardGuard], component: ListComponent },
  { path: 'us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent} 
  
];
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
