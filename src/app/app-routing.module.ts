import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { authGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent,canActivate:[authGuard]},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserlistingComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
