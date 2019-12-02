import { Injectable } from '@angular/core';
import {Lapiz}  from "../model/lapiz";

const ESTUCHE:Map<number,Lapiz> = new Map<number,Lapiz>
(               //añadimos 4 lapices
  [ 
    [1,new Lapiz(1,"lapiz1",1.5,new Date(2001,3,4))],
    [2,new Lapiz(2,"lapiz2",2.5,new Date(2000,3,4))],
    [3,new Lapiz(3,"lapiz3",3.5,new Date(2003,3,4))],
    [4,new Lapiz(4,"lapiz4",4.5,new Date(2004,3,4))],
  ]
);

@Injectable
({
  providedIn: 'root'
})
export class LapizService 
{ //CRUD +getAll
  create(lapiz:Lapiz):void
  {     
    ESTUCHE.set(lapiz.codigo,lapiz);
  }
  read(codigo:number):Lapiz {
    return ESTUCHE.get(codigo);
  } 
  update(lapiz:Lapiz):void {
    //nos ahorramos por ahora comprobar si existe
    ESTUCHE.set(lapiz.codigo,lapiz);
  }
  delete(codigo:number):void {
    ESTUCHE.delete(codigo);
  }
  getAll():Lapiz[]{
    let lapices:Lapiz[] = [];
    let keys = Array.from(ESTUCHE.keys() );

    for (let key of keys){  //itermaos llaves
      lapices.push(ESTUCHE.get(key));//recogemosel lapiz  del mapa 
    }

    return  lapices;
  }
}
