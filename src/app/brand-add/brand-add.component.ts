import { Component, OnInit } from '@angular/core';
import { BrandService } from '../services/brand/brand.service';
import { Brand } from '../models/brand.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.less']
})
export class BrandAddComponent implements OnInit {

  public brand!: Brand;
  new: boolean = false;
  constructor(
    private Brand: BrandService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.brand = new Brand();
  }

  add() {
    this.Brand.addNewBrand(this.brand).subscribe(() => {
      this.brand = new Brand();
      this.new = true;
      setTimeout(() => {
        this.new = false;
        this.router.navigate(['/brands']);
      }, 3000);
    });
  }

}
