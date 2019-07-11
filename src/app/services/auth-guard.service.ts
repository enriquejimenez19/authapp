import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(this.authService.isAuthenticated);
    if(this.authService.isAuthenticated.value == true){
      console.log("Pasó el guard.")
      return true;
    }else{
      console.log("Bloqueado por el guard.")
      return false;
    }
  }
}
