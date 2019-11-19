import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationComponent } from './main-page/navigation/navigation.component';
import { HeaderComponent } from './main-page/navigation/header/header.component';
import { SidenavComponent } from './main-page/navigation/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
