import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (typeof value === 'number') {
      return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
      return value;
    }
  }

}