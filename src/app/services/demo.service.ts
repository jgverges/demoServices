import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

getRefran():string{
  return "A quien madruga Dios le ayuda";
}
}
