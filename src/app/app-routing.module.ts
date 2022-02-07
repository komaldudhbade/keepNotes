import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ForthpageComponent } from './forthpage/forthpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

const routes: Routes = [

  {
    path:'firstPageLink',component:FirstpageComponent
  },
  {
    path:'secondPageLink',component:SecondpageComponent
  },
  {
    path:'thirdPageLink',component:ThirdpageComponent
  },
  {
    path:'forthPageLink',component:ForthpageComponent
  },
  {
    path:'fifthPageLink',component:FifthpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
