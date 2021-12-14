import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Ship } from 'src/app/models/ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  private dbPath = '/ships';
  shipsRef: AngularFirestoreCollection<Ship>;

  constructor(
    private db: AngularFirestore
  ) {
    this.shipsRef = db.collection(this.dbPath);
  }

  getAllShips(): any {
    return this.shipsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()});
        })
      })
    );  
  }

  addNewShip(ship: Ship): any {
    return new Observable(obs => {
      this.shipsRef.add({...ship}).then(() => {
        obs.next();
      });
    });
  }

  updateShip(ship: Ship): any {
    return new Observable(obs => {
      this.shipsRef.doc(ship.id).update(ship);
      obs.next();
    });
  }

  getShip(id: any) {
    return new Observable(obs => {
      this.shipsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()})
      });
    });
  }

  deleteShip(id: any) {
    this.db.doc(`ships/${id}`).delete();
  }
}
