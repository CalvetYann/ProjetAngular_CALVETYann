import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../services/brand/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.less']
})
export class BrandEditComponent implements OnInit {
  brand: any = null;
  change: boolean = false;
  constructor(
    private Brand: BrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Brand.getBrand(id).subscribe((value: any) => {
      this.brand = value;
    });
  }

  edit() {
    this.Brand.updateBrand(this.brand).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
        this.router.navigate(['/brands']);
      }, 3000);
    });
  }
}
