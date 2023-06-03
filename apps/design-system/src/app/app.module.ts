import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ButtonComponent } from '@angular-architects/ui-components';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
