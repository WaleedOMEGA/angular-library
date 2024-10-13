import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateChangeService {

  constructor() { }

  logMessage(msg:any){
    console.log('this is from angular library',msg)
  }
}
