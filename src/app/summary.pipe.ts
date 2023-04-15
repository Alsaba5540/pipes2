import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value:string, limits:number=50) {
    return value.slice(0,limits) +`...`
  }
}
