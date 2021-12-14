import { Component, OnInit } from '@angular/core';
import { ShipService } from '../services/ship/ship.service';
import { Ship } from '../models/ship.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-add',
  templateUrl: './ship-add.component.html',
  styleUrls: ['./ship-add.component.less']
})
export class ShipAddComponent implements OnInit {

  public ship!: Ship;
  new: boolean = false;

  constructor(
    private Ship: ShipService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ship = new Ship();
  }

  add() {
    this.Ship.addNewShip(this.ship).subscribe(() => {
      this.ship = new Ship();
      this.new = true;
      setTimeout(() => {
        this.new = false;
        this.router.navigate(['/ships']);
      }, 3000);
    });
  }

}
