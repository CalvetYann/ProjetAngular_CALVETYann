import { Component, Input, OnInit } from '@angular/core';
import { ShipService } from '../services/ship/ship.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.less']
})
export class ShipComponent implements OnInit {
  @Input() brandName?: string;
  @Input() shipName?: string;
  @Input() shipRole?: string;
  @Input() shipSize?: string;
  @Input() shipWeight?: string;
  @Input() shipLength?: string;
  @Input() shipWidth?: string;
  @Input() shipHeight?: string;
  @Input() shipPicture?: string;
  @Input() shipDesc?: string;
  @Input() shipFlightReady?: boolean;
  @Input() id?: string;
  
  constructor(
    private Ship: ShipService
  ) {}

  ngOnInit(): void {
  }

  delete(): void {
    this.Ship.deleteShip(this.id);
  }

}
