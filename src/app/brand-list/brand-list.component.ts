import { Component, OnInit } from '@angular/core';
import { BrandService } from '../services/brand/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.less']
})
export class BrandListComponent implements OnInit {
  brands!: any;
  constructor(
    private Brand: BrandService
  ) { }

  ngOnInit(): void {
    this.Brand.getAllBrands().subscribe((data: any) => {
      this.brands = data;
    });
  }

}
