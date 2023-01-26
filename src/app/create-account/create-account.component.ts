import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { CreateAccount } from '../create-account';
import { DataService } from '../service/data.service';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{
  createaccounts:any;
  createaccount = new CreateAccount;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Output() createOut = new EventEmitter;

  // choose = `optionValue`;
  titleStudent = 'Sign Up for New Students';
  // titleTeacher = 'Sign Up for New Teacher'

  // choice = 'Are You?';


    getAccountData(){
      this.dataService.getData().subscribe(res =>{
      this.createaccounts = res;
    });
  }

  insertData(){
      this.dataService.insertData(this.createaccount).subscribe(res =>{
        console.log(res);
      });

  }
}


