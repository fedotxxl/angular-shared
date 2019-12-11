import { Pipe, PipeTransform } from '@angular/core';
import {format} from 'date-fns';

@Pipe({
    name: 'dateToHuman'
})
export class DateToHumanPipe implements PipeTransform {
    
    transform(value: Date, args?: any): any {
        if (value) {
            if (args === 'time') {
                return format(value, 'DD.MM.YYYY HH:mm');
            }
            return format(value, 'YYYY/MM/DD');
        } else {
            return '';
        }
    }
    
}
