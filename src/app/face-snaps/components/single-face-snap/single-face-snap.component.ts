import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../../../core/models/face-snap.model";
import {FaceSnapsService} from "../../../core/services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap$!: Observable<FaceSnap>
  snapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.snapped = false;
    const id = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(id);
  }

  onSnap(id:number) {
    this.snapped ? this.faceSnap$ = this.faceSnapService.snapFaceSnapById(id, 'unsnap').pipe(
      tap(()=>this.snapped = false),
    ) : this.faceSnap$ = this.faceSnapService.snapFaceSnapById(id, 'snap').pipe(
      tap(()=>this.snapped = true)
    );
  }

}
