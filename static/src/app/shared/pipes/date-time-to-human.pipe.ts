import {Pipe, PipeTransform} from '@angular/core';
import {format} from "date-fns";

@Pipe({
    name: 'dateTimeToHuman'
})
export class DateTimeToHumanPipe implements PipeTransform {

    transform(value: Date, args?: any): any {
        if (value) {
            return format(value, 'DD.MM.YYYY HH:mm');
        } else {
            return '';
        }
    }

}
