import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Brand } from 'src/app/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private dbPath = '/brands';
  brandsRef: AngularFirestoreCollection<Brand>;

  constructor(
    private db: AngularFirestore
  ) {
    this.brandsRef = db.collection(this.dbPath);
  }

  getAllBrands(): any {
    return this.brandsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()});
        })
      })
    );  
  }

  addNewBrand(brand: Brand): any {
    return new Observable(obs => {
      this.brandsRef.add({...brand}).then(() => {
        obs.next();
      });
    });
  }

  updateBrand(brand: Brand): any {
    return new Observable(obs => {
      this.brandsRef.doc(brand.id).update(brand);
      obs.next();
    });
  }

  getBrand(id: any) {
    return new Observable(obs => {
      this.brandsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()})
      });
    });
  }

  deleteBrand(id: any) {
    this.db.doc(`brands/${id}`).delete();
  }
}
