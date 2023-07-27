import {Component} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  faceSnap!: FaceSnap;
  snapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.snapped = false;
    const id = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(id);
  }

  onSnap() {
    this.snapped ? this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap') : this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapped = !this.snapped;
  }

}
