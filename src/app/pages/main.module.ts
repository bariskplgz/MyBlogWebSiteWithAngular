import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from '../app.routes';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [HomeComponent,AboutMeComponent,ContactComponent],
  imports: [
    CommonModule,BrowserModule,HttpClientModule,AppRoutingModule,ComponentsModule]
})
export class MainModule { }
