import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpService } from 'src/app/httpservice';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { EdituserdataComponent } from '../edituserdata/edituserdata.component';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {


  constructor(private service:HttpService,private _snackBar: MatSnackBar,public dialog: MatDialog){}
  displayedColumns: string[] = ['firstname', 'lastname', 'email','phone', 'address','requirements','edit','delete'];
  dataSource:any;

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;


  openDialog(data): void {


    const dialogRef = this.dialog.open(EdituserdataComponent, {
      width: '550px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  
}

getData()
{
this.service.getData().subscribe(data=>{
  this.dataSource=new MatTableDataSource<Users>(data["data"]);
  this.dataSource.paginator = this.paginator;
})
}

delete(id)
{
  this.service.deleteUser({id:id}).subscribe(data=>{
    this.openSnackBar(data["message"],"Hide")
    this.dataSource=new MatTableDataSource<Users>(data["data"]);
    this.dataSource.paginator = this.paginator;
  })
}


  ngOnInit() {
    this.getData();
    
  }
}

export interface Users {
  _id:string,
  firstname: string,
  
  lastname:string,
  email:string,
  name:string,
  phone:string,
  requirements:[string],

  address:string
}



