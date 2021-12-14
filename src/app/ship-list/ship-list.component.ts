import { Component, OnInit } from '@angular/core';
import { ShipService } from '../services/ship/ship.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.less']
})
export class ShipListComponent implements OnInit {
  ships!: any;
  constructor(
    private Ship: ShipService
  ) {}

  ngOnInit(): void {
    this.Ship.getAllShips().subscribe((data: any) => {
      this.ships = data;
    });
  }
}
