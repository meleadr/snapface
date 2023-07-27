import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService) { }

  ngOnInit() {
    this.snapped = false;
  }

  onSnap() {
    if(this.snapped) {
      this.faceSnapService.unSnapFaceSnapById(this.faceSnap.id);
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
    }
    this.snapped = !this.snapped;
  }
}
