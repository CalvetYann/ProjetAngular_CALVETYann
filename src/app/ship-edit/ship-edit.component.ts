import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from '../services/ship/ship.service';

@Component({
  selector: 'app-ship-edit',
  templateUrl: './ship-edit.component.html',
  styleUrls: ['./ship-edit.component.less']
})
export class ShipEditComponent implements OnInit {
  ship: any = null;
  change: boolean = false;

  constructor(
    private Ship: ShipService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Ship.getShip(id).subscribe((value: any) => {
      this.ship = value;
    });
  }

  edit() {
    this.Ship.updateShip(this.ship).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
        this.router.navigate(['/ships']);
      }, 3000);
    })
  }
}
