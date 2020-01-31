En este ejercicio se pide:

- Crear un módulo de Angular, el cual va a contener 2 servicios, de tal forma que, el primero debe depender del segundo. Dicho módulo se va a llamar 'Compra'.

- Estos servivios se llamarán 'Mercadona' y 'Hacendado'. 

- 'Mercadona' debe tener un método público para que el cliente solicite el precio de un producto.

- 'Mercadona' debe tener un método privado para solicitar a 'Hacendado' un string con precio del producto.

- 'Hacendado' debe tener un método público que devuelva un string con el valor '5€'.

- 'Mercadona' debe devolver la respuesta, concatenando producto y precio. ejemplo: 'El producto xxxxx vale 5€'.

Por último reutilizaremos dicho módulo en el app.module y llamaremos al método para obtener el precio de un producto en el ngOnInit del app.component.