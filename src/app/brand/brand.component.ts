import { Component, Input, OnInit } from '@angular/core';
import { BrandService } from '../services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.less']
})
export class BrandComponent implements OnInit {
  @Input() brandName?: string;
  @Input() brandCode?: string;
  @Input() brandLogo?: string
  @Input() brandIndus?: string;
  @Input() brandRace?: string
  @Input() brandProducts?: string;
  @Input() brandDesc?: string;
  @Input() brandFounded?: string;
  @Input() id?: string;

  constructor(
    private Brand: BrandService
  ) {}

  ngOnInit(): void {
  }

  delete(): void {
    this.Brand.deleteBrand(this.id);
  }
}
