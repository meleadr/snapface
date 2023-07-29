import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {
  }

  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
  }

  getFaceSnapById(id: number): Observable<FaceSnap> {
   return this.http.get<FaceSnap>(`http://localhost:3000/faceSnaps/${id}`);
  }

  snapFaceSnapById(id:number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(id).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: snapType === 'snap' ? faceSnap.snaps + 1 : faceSnap.snaps - 1
      })),
      switchMap(faceSnap => this.http.put<FaceSnap>(`http://localhost:3000/faceSnaps/${id}`, faceSnap))
    );
  }

  addFaceSnap(formValue: { title:string, description:string, imageUrl:string, location?:string }): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      snaps: 0
    }

    this.faceSnaps.push(faceSnap);
  }
}
