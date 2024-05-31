import { Injectable, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl='http://localhost:3000/user';
  constructor( private http:HttpClient) {}
   GetAll(){
    return this.http.get(this.apiUrl);
   }

   Getbycode(code:any){
    return this.http.get(this.apiUrl+'/'+code);
   }

   Proceedregister(inputdata:any){
    return this.http.post(this.apiUrl,inputdata)
   }

   Updateuser(code:any,inputdata:any){
    return this.http.put(this.apiUrl+'/'+code,inputdata);
   }

   isLoggedIn(){
    return sessionStorage.getItem('username')!=null;
   }

   GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
   }
}
