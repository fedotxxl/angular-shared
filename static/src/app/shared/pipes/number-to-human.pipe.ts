import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToHuman'
})
export class NumberToHumanPipe implements PipeTransform {
    
    private formatter = (x) => String.prototype.replace.bind(x.toString(), /\B(?=(\d{3})+(?!\d))/g, ' ');
    
    /**
     * 12345678         ->  12 345 678
     * 123456.7         ->  123 456.7
     * 1234.56789111111 ->  1 234.57
     */
    transform(value: number): any {
        if (value) {
            
            if  (NumberToHumanPipe.countDecimals(value) >= 2) {
                return this.formatter(value.toFixed(2))();
            } else {
                return this.formatter(value)();
            }
        } else {
            return '';
        }
    }
    
    private static countDecimals(value: number): number {
        if (Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
        return 0;
    }
}
