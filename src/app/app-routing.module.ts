import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipAddComponent } from './ship-add/ship-add.component';
import { ShipEditComponent } from './ship-edit/ship-edit.component';

import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ships',
    component: ShipListComponent
  },
  {
    path: 'ships/add',
    component: ShipAddComponent
  },
  {
    path: 'ships/edit/:id',
    component: ShipEditComponent
  },
  {
    path: 'brands',
    component: BrandListComponent
  },
  {
    path: 'brands/add',
    component: BrandAddComponent
  },
  {
    path: 'brands/edit/:id',
    component: BrandEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
