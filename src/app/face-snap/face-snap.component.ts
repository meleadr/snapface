import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private router: Router) { }

  ngOnInit() {
    this.snapped = false;
  }

  onSnap() {
    this.snapped ? this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap') : this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapped = !this.snapped;
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
