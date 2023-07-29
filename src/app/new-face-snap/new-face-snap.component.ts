import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FaceSnap} from "../models/face-snap.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null],
    });

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id:0,
        snaps: 0,
      }))
    );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
  }
}
