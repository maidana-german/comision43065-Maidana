let mensajeBienvenida = "Bienvenido a la app de facturación";
alert(mensajeBienvenida);


let continuar = prompt("Desea continuar ?")
precioTotal = 0;
i = 0;
while (continuar != "no"){

function precio(precioSinIva, iva){
    precioFinal = precioSinIva + iva;
    mensaje = `El precio final del producto: ${producto}, es de ARS ${precioFinal}`
    alert(mensaje);
}

    producto = prompt("Ingrese el producto");
    valor1 = parseInt(prompt("Ingrese precion sin IVA"));
    valor2 = valor1 * 0.21;
    i = i + 1;
    precio(valor1, valor2);


continuar = prompt("Desdea continuar?");


precioTotal = precioTotal + precioFinal;


}
alert(`El total de la compra, ${i} productos, es de ARS ${precioTotal}`);


