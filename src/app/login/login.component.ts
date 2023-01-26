import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  icon = 'assets/img/LF_Icon.png';
  constructor(private router: Router){ }
  logIn($myParam: string = ''): void{
    const navigationDetails: string[] = ['/student-dash-b'];
    if($myParam.length) {
      navigationDetails.push($myParam);
   }
  this.router.navigate(navigationDetails);

}


ngOnit(){

}
}


