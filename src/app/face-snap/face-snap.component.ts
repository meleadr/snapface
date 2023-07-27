import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapped!: boolean;

  ngOnInit() {
    this.snapped = false;
  }

  onSnap() {
    if(this.snapped) {
      this.faceSnap.snaps--;
    } else {
      this.faceSnap.snaps++;
    }
    this.snapped = !this.snapped;
  }
}
