import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/httpservice';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-coviddata',
  templateUrl: './coviddata.component.html',
  styleUrls: ['./coviddata.component.css']
})
export class CoviddataComponent implements OnInit {


  firstname:string="";
  lastname:string="";
  toppingList=["Mask","Sanitizer","Towel","Pain Killers","Cough Syrup","Bread Butter"];
  requirements:any="";
  email:string="";
  phone:string="";
  address:string="";
  constructor(private service:HttpService,private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  
}

  ngOnInit() {
  }
saveData()
{

  if(this.firstname.length>0 && this.lastname.length>0 && this.email.length>0 && this.phone.length>0 && this.address.length>0 && this.requirements.length>0)
  {
    this.service.registerUser({address:this.address,firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone,requirements:this.requirements}).subscribe(data=>{
      this.openSnackBar(data["message"],"Hide")
      this.firstname="";
 
  this.lastname="";

  this.requirements="";
  this.email="";
  this.phone="";
  this.address="";
    })
  }

  else{
    this.openSnackBar("Please Input All Fields","Hide");
  }
  
}


}
