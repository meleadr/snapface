import { Injectable } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap: FaceSnap | undefined = this.faceSnaps.find(
      (faceSnap: FaceSnap): boolean => {
        return faceSnap.id === id;
      }
    );
    if (faceSnap) {
      return faceSnap;
    }else{
      throw new Error('FaceSnap not found');
    }
  }

  snapFaceSnapById(id:number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
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
