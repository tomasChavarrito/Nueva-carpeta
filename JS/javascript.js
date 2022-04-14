const articulos = [
    {
        nombre: "Iphone 13",
        cantidad: 2,
        precio: 80000
    },
    {
        nombre: "Iphone 12",
        cantidad: 1,
        precio: 300000
    },
    {
        nombre: "Samsung S22",
        cantidad: 1,
        precio: 250000
    },
    {
        nombre: "Samsung S21",
        cantidad: 2,
        precio: 70000
    }

]

const impuestos = [
    {
        nombre: "IVA", 
        monto: 0.21
    }
]

const descuentos = [
    {
        nombre: "Descuento efectivo 10%", 
        monto: 0.1
    },
    {
        nombre: "Cupon Descuento 20%", 
        monto: 0.2
    }
]

const calcularTotalDescuentos = precioTotal => {
    totalDescuentos = 0;
    for (let i = 0; i <= descuentos.length-1; i++) {
        totalDescuentos += precioTotal * descuentos[i].monto;
        precioTotal -= totalDescuentos; 
    }
    return totalDescuentos;
    
}

const calcularTotalImpuestos = precioTotal => {
    totalImpuestos = 0;
    for (let i = 0; i <= impuestos.length-1; i++) {
        totalImpuestos += precioTotal * impuestos[i].monto;
    }
    return totalImpuestos;
}

function calculaPrecioFinal() {

    precioTotal = 0;

    console.log("--------------------------------------");
    console.log("Articulos");
    console.log("--------------------------------------");
    console.table(articulos);

    console.log("--------------------------------------");
    console.log("Descuentos");
    console.log("--------------------------------------");
    console.table(descuentos);

    console.log("--------------------------------------");
    console.log("Impuestos");
    console.log("--------------------------------------");
    console.table(impuestos);

    for (let i = 0; i <= articulos.length-1; i++) {
        precioTotal += articulos[i].precio * articulos[i].cantidad;
    }

    if(precioTotal != 0){
        precioTotal -= calcularTotalDescuentos(precioTotal);
        precioTotal += calcularTotalImpuestos(precioTotal);
    }

    console.log("--------------------------------------");
    console.log("Precio total: " + precioTotal);
    console.log("--------------------------------------");

    
}