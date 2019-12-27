import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Event } from '../../interfaces';
import { ApiService } from '../../services';

@Component({
  selector: 'app-room3',
  templateUrl: './room3.component.html',
  styleUrls: ['./room3.component.scss']
})
export class Room3Component implements OnInit {
eventForm: FormGroup;
listEvents: Event[];

constructor(private apiservice: ApiService, private fb: FormBuilder) { }

ngOnInit() {
  this.initForm();
  this.postEvent();
  this.getEvent();
}

postEvent(): void {
  this.apiservice.addEvent({name: this.eventForm.controls.title.value, startAt: this.eventForm.controls.dateStart.value,
    endAt: this.eventForm.controls.dateEnd.value, roomId: this.eventForm.controls.roomId.value});
}

getEvent(): void {
  this.apiservice.getEventData().subscribe(data => { this.listEvents = data; });
}

private initForm(): void {
  this.eventForm = this.fb.group({
    title: [[''], [
      Validators.required,
      Validators.pattern(/[A-zА-я0-9,]/)
      ]
    ],
    dateStart: [],
    dateEnd: [],
    roomId: [[''], [
      Validators.required,
      Validators.pattern(/[3]/)
    ]
  ]
  });
}
}
