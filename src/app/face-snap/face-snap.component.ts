import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imgUrl!: string;
  snapped!: boolean;

  ngOnInit() {
    this.title = 'Alexandre';
    this.description = 'Mon meilleur ami.';
    this.createdDate = new Date();
    this.snaps = 8;
    this.imgUrl = 'https://picsum.photos/500/500';
    this.snapped = false;
  }

  onSnap() {
    if(this.snapped) {
      this.snaps++;
    } else {
      this.snaps--;
    }
    this.snapped = !this.snapped;
  }
}
