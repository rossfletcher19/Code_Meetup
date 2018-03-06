import { Injectable } from '@angular/core';

import { Meetup } from './meetup.model';
import { MEETUP } from './mock-meetup';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class MeetupsService {
  meetups: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.meetups = database.list('meetups');
  }

  getMeetups() {
    return this.meetups;
  }

  addMeetup(newMeetup: Meetup) {
    this.meetups.push(newMeetup);
    this.meetups.$ref.orderByKey().limitToLast(1).on("child_added", (meetup) => {
      this.meetups.update(meetup, { startedAt: firebase.database.ServerValue.TIMESTAMP });
    });
  }
}
