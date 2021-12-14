import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShipComponent } from './ship/ship.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipAddComponent } from './ship-add/ship-add.component';
import { ShipEditComponent } from './ship-edit/ship-edit.component';

import { BrandComponent } from './brand/brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';

import { HomeComponent } from './home/home.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ShipComponent,
    ShipListComponent,
    ShipAddComponent,
    ShipEditComponent,
    BrandComponent,
    BrandListComponent,
    BrandAddComponent,
    BrandEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
