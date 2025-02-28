import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userdata:any;
  constructor(private builder:FormBuilder,private toastr:ToastrService,private service:AuthService,private router:Router){
    sessionStorage.clear();
  }

  loginform=this.builder.group({
    username:this.builder.control('',Validators.compose([Validators.required])),
    password:this.builder.control('',Validators.compose([Validators.required]))
  })


  proceedlogin(){
    if(this.loginform.valid){
      this.service.Getbycode(this.loginform.value.username).subscribe(res=>{
         this.userdata=res;
         console.log(this.userdata);
         if(this.userdata.password===this.loginform.value.password){
            if(this.userdata.isActive){
                sessionStorage.setItem('username',this.userdata.id);
                sessionStorage.setItem('userrole',this.userdata.role);
                this.router.navigate(['']);
            }else{
              this.toastr.error('Please contact admin','In-active user')
            }

         }else{
          this.toastr.error('Invalid credentials');
         }
      })
    }
  }

}
