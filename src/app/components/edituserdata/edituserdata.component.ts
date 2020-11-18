import { Component, OnInit,Inject,Output,EventEmitter  } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Router } from '@angular/router';
import { HttpService } from 'src/app/httpservice';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edituserdata',
  templateUrl: './edituserdata.component.html',
  styleUrls: ['./edituserdata.component.css']
})
export class EdituserdataComponent implements OnInit {

firstname:string="";

lastname:string="";
toppingList=["Mask","Sanitizer","Towel","Pain Killers","Cough Syrup","Bread Butter"];
requirements:any="";
email:string="";
phone:string="";
address:string="";
_id:string="";

  constructor(
    public dialogRef: MatDialogRef<EdituserdataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private service:HttpService,private _snackBar: MatSnackBar,private router:Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  
}


  ngOnInit() {
    console.log("Edit data",this.data);
    this.firstname=this.data.firstname;
    this.lastname=this.data.lastname;
    this.email=this.data.email;
    this.phone=this.data.phone;
    this.address=this.data.address;
    this.requirements=this.data.requirements;
    this._id=this.data._id;

  }

  editUser()
  {
this.service.editUser({_id:this._id,address:this.address,firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone,requirements:this.requirements}).subscribe(data=>{
  this.dialogRef.close();
  this.openSnackBar("SuccesFully Updated","Hide");

  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/usersData']);

}); 
  
})
  }

}
export interface DialogData {
  _id:string,
  firstname: string,
  
  lastname:string,
  email:string,
  name:string,
  phone:string,
  requirements:[string],

  address:string
}
