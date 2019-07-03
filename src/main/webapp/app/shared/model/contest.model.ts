import { IAnnouncement } from 'app/shared/model/announcement.model';

export interface IContest {
  id?: number;
  announcements?: IAnnouncement[];
}

export class Contest implements IContest {
  constructor(public id?: number, public announcements?: IAnnouncement[]) {}
}
