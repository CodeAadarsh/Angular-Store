import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Developer imports

import { MatGridListModule, } from '@angular/material/grid-list';
import { MatMenuModule, } from '@angular/material/menu';
import { MatButtonModule, } from '@angular/material/button';
import { MatCardModule, } from '@angular/material/card';
import { MatIconModule, } from '@angular/material/icon';
import { MatExpansionModule, } from '@angular/material/expansion';
import { MatListModule, } from '@angular/material/list';
import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatTableModule, } from '@angular/material/table';
import { MatSidenavModule, } from '@angular/material/sidenav';
import { MatBadgeModule, } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
