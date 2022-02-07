import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { ForthpageComponent } from './forthpage/forthpage.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { SixthpageComponent } from './sixthpage/sixthpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavigationComponent,
    SecondpageComponent,
    ThirdpageComponent,
    ForthpageComponent,
    FifthpageComponent,
    SixthpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
