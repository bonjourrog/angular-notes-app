import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutLongText'
})
export class CutLongTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const text: string = `${value}` 
    if(text.length > 10){
      return `${text.substring(0, 15)}...`
    }
    return text;
  }

}
