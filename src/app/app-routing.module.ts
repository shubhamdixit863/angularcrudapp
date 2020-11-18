import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoviddataComponent } from './components/coviddata/coviddata.component';
import { UserdataComponent } from './components/userdata/userdata.component';


const routes: Routes = [
{path:"",component:CoviddataComponent},
{path:"usersData",component:UserdataComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
