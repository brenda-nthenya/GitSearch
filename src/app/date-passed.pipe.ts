import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed',
})
export class DatePassedPipe implements PipeTransform {
  transform(time: any): any {
    let Now: any = new Date();
    let Uploaded: any = new Date(time);
    let timepassed = Math.abs(Now - Uploaded);

    let minutesPassed = Math.floor(timepassed / 60000);
    let hoursPassed = Math.floor(minutesPassed / 60);
    let secondsPassed = Math.floor(timepassed / 1000);
    let daysPassed = Math.floor((timepassed * 0.001) / 86400);
    let yearsPassed = Math.floor(daysPassed / 364);

    if (yearsPassed >= 1) {
      return 'Updated ' + yearsPassed + ' years ago';
    } else if (daysPassed > 1) {
      return 'Updated ' + daysPassed + ' days ago';
    } else if (daysPassed <= 1 && hoursPassed > 1) {
      return 'Updated ' + hoursPassed + ' hours ago';
    } else if (daysPassed <= 1 && minutesPassed > 1) {
      return 'Updated ' + minutesPassed + ' minutes ago';
    } else {
      return 'Updated ' + secondsPassed + ' seconds ago';
    }
  }
}