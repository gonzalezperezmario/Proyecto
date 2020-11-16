/*
   Insertamos una serie de valores sobre procesadores.
    Usaremos una nueva colección llamada "procesadores".
    
    Los insertaremos mediante la función "insertMany".
    Estructura: {
        Nombre: string (Nombre del procesador)
        Gama: string (Cantidad de memoria VRAM)
        Ram_Spt: array (Gigabytes de Ram que soporta)
        Frecuencia: int (Frecuencia base en Megahercios ) 
        Componentes: objeto:{
            Tarjeta Gráfica: string (Nombre de la tarjeta gráfica)
            Fuente: int (Cantidad de Watts requeridos para el sistema)
            Placa: string (Socket de la placa base compatible para el procesador)
            RAM: int (Cantidad de RAM)
            Precio: int (Precio en euros que valdrian todos los componentes)
        }
        Fecha: fecha (Fecha de salida)
        Capacidad_Overclock: Boolean (Capacidad para aumentar la frecuencia reloj)
    }
*/
db.procesadores.insertMany([
    { Nombre:"Core 2 Quad Q9400", 
        Gama: "Escritorio", 
        Ram_Spt:[4, 8, 12], 
        Frecuencia: 2660, 
        Componentes_adecuados:
            {Gráfica:"GTX 950", 
            Fuente: 300, 
            Placa: "LGA 775", 
            RAM: 8, 
            Precio: 200}, 
        Fecha: new Date("2006-1-1"), 
        Capacidad_Overclock:true},

    { Nombre:"Ryzen 5 3400G", Gama: "Escritorio", Ram_Spt:[16, 32, 64],Frecuencia: 3400, Componentes_adecuados:{Gráfica:"Rx 570", Fuente: 450, Placa: "AM4", RAM: 12, Precio: 500}, Fecha: new Date("2019-1-1"), Capacidad_Overclock:true},
    { Nombre:"i7-8550U", Gama: "Portátil", Ram_Spt:[16, 32, 64], Frecuencia: 1800, Componentes_adecuados:{Gráfica:"GTX 1660ti", Fuente:300, Placa: "LGA 1151", RAM: 8, Precio: 650}, Fecha: new Date("2017-1-1"), Capacidad_Overclock:null},
    { Nombre:"i5-9400f", Gama:"Escritorio", Ram_Spt:[16, 32, 64], Frecuencia: 2900, Componentes_adecuados:{Gráfica:"RTX 2060", Fuente: 550, Placa: "LGA 1151", RAM: 16, Precio: 650}, Fecha: new Date("2018-1-1"), Capacidad_Overclock:false},
    { Nombre:"Xeon x5460", Gama:"Servidor", Ram_Spt:[4, 8, 16], Frecuencia: 3100, Componentes_adecuados:{Gráfica:"GTX 1050ti", Fuente: 400, Placa: "LGA 775", RAM: 8, Precio: 250}, Fecha: new Date("2007-1-1"), Capacidad_Overclock:true},
    { Nombre:"FX 8350", Gama:"Escritorio", Ram_Spt:[8, 16, 32, 64], Frecuencia: 4000,  Componentes_adecuados:{Gráfica:"GTX 1070", Fuente: 550, Placa: "AM3", RAM: 12, Precio: 500}, Fecha: new Date("2012-1-1"), Capacidad_Overclock:true},
    { Nombre:"Core 2 Duo E8400", Gama:"Escritorio", Ram_Spt:[2, 4, 6], Frecuencia: 3000, Componentes_adecuados:{Gráfica:"GTX 650", Fuente: 300, Placa: "LGA 775", RAM: 6, Precio: 120}, Fecha: new Date("2005-1-1"), Capacidad_Overclock:false},
    { Nombre:"i9-9980XE", Gama:"Profesional", Ram_Spt:[32, 64, 128, 256], Frecuencia: 3000, Componentes_adecuados:{Gráfica:"RTX 3090", Fuente: 1000, Placa: "LGA 2000", RAM: 32, Precio: 2500}, Fecha: new Date("2018-1-1"), Capacidad_Overclock:true},
    { Nombre:"Athlon x4 760K", Gama:"Escritorio", Ram_Spt:[4, 8, 12], Frecuencia: 3800, Componentes_adecuados:{Gráfica:"GTX 950", Fuente: 300, Placa: "AM3", RAM: 8, Precio: 200}, Fecha: new Date("2010-1-1"), Capacidad_Overclock:true},
    { Nombre:"Threadripper 3990X", Gama:"Profesional", Ram_Spt:[8, 16, 32, 64], Frecuencia: 4000, Componentes_adecuados:{Gráfica:"RX 6900XT", Fuente: 850, Placa: "TR4", RAM: 32, Precio: 3500}, Fecha: new Date("2020-1-1"), Capacidad_Overclock:false},
    { Nombre:"Ryzen 5 3550H", Gama:"Portátil", Ram_Spt:[8, 16, 32], Frecuencia: 2100, Componentes_adecuados:{Gráfica:"RX 5600XT", Fuente: 450, Placa: "AM4", RAM: 12, Precio: 600}, Fecha: new Date("2018-1-1"), Capacidad_Overclock:false},
    { Nombre:"i5-2500K", Gama:"Escritorio", Ram_Spt:[4, 8, 16], Frecuencia: 3300, Componentes_adecuados:{Gráfica:"GTX 970", Fuente: 500, Placa: "1151", RAM: 12, Precio: 300}, Fecha: new Date("2011-1-1"), Capacidad_Overclock:true},
    { Nombre:"i7-4700K", Gama:"Servidor", Ram_Spt:[64, 128, 256], Frecuencia: 3400, Componentes_adecuados:{Gráfica:"RTX 3090", Fuente: 1000, Placa: "LGA 2000", RAM: 168, Precio: 10000}, Fecha: new Date("2017-1-1"), Capacidad_Overclock:false},
    { Nombre:"Pentium 4", Gama:"Escritorio", Ram_Spt:[2, 4], Frecuencia: 2800, Componentes_adecuados:{Gráfica:"GT 1030", Fuente: 200, Placa: "LGA 775", RAM: 6, Precio: 100}, Fecha: new Date("2016-1-1"), Capacidad_Overclock:false},
    { Nombre:"Ryzen 3600", Gama:"Escritorio", Ram_Spt:[8, 16, 32, 64], Frecuencia: 3800, Componentes_adecuados:{Gráfica:"RX 2070", Fuente: 600, Placa: "AM4", RAM: 16, Precio: 800}, Fecha: new Date("2019-1-1"), Capacidad_Overclock:true}
])

/* Insertamos los documentos concretados arriba y comenzamos a realizar consultas (querys) 

 Atención: Los recursos utilizados en cada una de las siguientes Querys vendrán explicados en el documento pdf adjunto.

 */

 /* Filtra los procesadores cuya gama sea "Escritorio", su Frecuencia sea mayor o igual a 2500Mhz, su Fecha de salida sea posterior o igual al 01-01-2011", que sea capaz de overclockear y además que su precio sea menor o igual a 800 euros(Debido al $and muestra los documentos que cumplan TODAS las condiciones implantadas)*/
 
    db.procesadores.find({$and: [
        {Gama: {$eq: "Escritorio"}},
        {Frecuencia:{$gte:2500}},
        {Fecha: {$gte: new Date("2011-1-1")}},
        {Capacidad_Overclock:false},
        {'Componentes_adecuados.Precio':{$lte:800}}
    ]
                         }).pretty()
 
/* Filtra los procesadores cuyo Nombre contenga una "i"minúscula, su gama no sea de servidor, que sea capaz de aumentar su frecuencia reloj, su frecuencia sea mayor o igual a 2000Mhz y además que la cantidad de Ram sea mayor a 8 (Debido al $and muestra los documentos que cumplan TODAS las condiciones implantadas)*/
    db.procesadores.find({$and: [
        {Nombre: {$regex: ".*i"}},
        {Gama:{$ne: "Servidor"}},
        {Capacidad_Overclock:true},
        {Frecuencia: {$gte:2000}},
        {'Componentes_adecuados.RAM': {$gt:8}}
    ]
                         }).pretty()
 
/* Filtra los procesadores que soporten 4, 8, y 16 Gbs, una frecuencia menor a 4200, posean una fuente que no cumpla la coindición de ser menor o igual a 300 Watts, que la Ram instalada no sea 4, que su precio sea menor o igual a 600, que su fecha de salida sea anterior a 2019, y además que sea capaz de aumentar su frecuencia reloj (Debido al $and muestra los documentos que cumplan TODAS las condiciones implantadas)*/
    db.procesadores.find({$and: [
        {Ram_Spt: {$all:[4 ,8, 16]}},
        {Frecuencia:{$lt:4200}},
        {'Componentes_adecuados.Fuente':{$not:{$lte: 300}}},
        {'Componentes_adecuados.RAM':{$ne:4}},
        {'Componentes_adecuados.Precio':{$lte:600}},
        {Fecha: {$lte:new Date("2019, 01, 01")}},
        {Capacidad_Overclock:true}
    ]
                         }).pretty()
 
 /*Filtra los procesadores que o bien su fecha de salida sea anterior al 2010 o que el precio sea menor o igual a 200 euros o que la Ram soportada sea de 2 y 4 o que el nombre de la gráfica contenga las letras "GT" sin importar las mayúsculas debido al operador $options:"i" (Debido al $or, la consulta muestra los documentos que cumplan al menos una de las coindiciones) */
    db.procesadores.find({$or: [
        {Fecha:{$lt:("2010-01-01")}},
        {'Componentes_adecuados.Precio':{$lte:200}},
        {Ram_Spt:{$in: [2, 4]}},
        {'Componentes_adecuados.Gráfica': {$regex: '.*GT' , $options:"i" }}
    ]
                         }).pretty()

/*Filtra los procesadores que no cumpla al menos una de las siguientes condiciones debidoa al operador $nor, las condiciones son que su precio sea mayor aa 2000, que no se pueda overclockear, que su gama sea de servidor y que su placa sea del Socket 1151*/
    db.procesadores.find({$nor:[
        {'Componentes_adecuados.Precio':{$gt:2000}},
        {Capacidad_Overclock:false},
        {Gama: {$eq: "Servidor"}},
        {'Componentes_adecuados.Placa': "LGA 1151"}
    ]
                         }).pretty()

/*Filtra los procesadores cuya frecuencia sea mayor a 2000Mhz, la ram soportada NO sea 2 y 4, la fuente sea de menos de 700 Watts y que su frecuencia reloj se pueda aumentar (Debido al $and muestra los documentos que cumplan TODAS las condiciones implantadas)*/
    db.procesadores.find({$and: [
        {Frecuencia: {$gt: 2000}},
        {Ram_Spt: {$nin: [2, 4]} },
        {'Componentes_adecuados.Fuente': {$lt:700}},
        {Capacidad_Overclock:true}
    ]
                         }).pretty()
 
/* La función del operador ".count()"en este caso es la de contar los documentos que cumplan las coindicoines de pertenecer a la gama "Escritorio, su fecha de salida sea posterior a 2011 y que su precio sea menor a 1000 euros. (En este caso el resultado es 6) */
    db.procesadores.find({$and: [
        {Gama: "Escritorio"}, 
        {Fecha:{$gte: new Date("2011-1-1")}},
        {'Componentes_adecuados.Precio':{$lt:1000}}
    ]
                         })
        .count()

/*Filtra los procesadores que tengan tres campos en el apartado de Ram soportada, que no sea de la gama servidor, que su frecuencia reloj se pueda aumentar y que tenga mas de 4gb de RAM (Debido al $and muestra los documentos que cumplan TODAS las condiciones implantadas)*/
    db.procesadores.find({$and:[
        {Ram_Spt:{$size:3}},
        {Gama:{$ne:"Servidor"}},
        {Capacidad_Overclock:true},
        {'Componentes_adecuados.RAM':{$gt:4}}
    ]
                         }).pretty()

/* Adjunto en la carpeta doc unas capturas del resultado de las consultas además de un pdf explicando el proyecto a profundidad y todos los operadores utilizados*/
