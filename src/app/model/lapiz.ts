export class Lapiz
{
    codigo:number;
    nombre:string;
    precio:number;
    fechaAlta:Date;
    descatalogado:boolean= false;

    constructor(codigo?:number,nombre?:string, precio?:number, fechaAlta?:Date)
    {
        this.codigo= codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.fechaAlta = fechaAlta;
    }
}