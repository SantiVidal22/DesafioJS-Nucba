const Pizzas = [

    {
        id: 1,
        nombre: "napolitana",
        ingredientes: ["queso mozzarella", "anchoas", "orégano", "alcaparras"],
        precio: 750,
    },
    {
        id: 2,
        nombre: "cuatro estaciones",
        ingredientes: ["aceitunas negras", "alcachofas", "jamon", "champigñones", "queso mozzarella"],
        precio: 899,
    },
    {
        id: 3,
        nombre: "primavera",
        ingredientes: ["queso mozzarella", "tomates cherry","oregano", "rúcula", "prosciutto", "queso parmesano"],
        precio: 1350,
    },
    {
        id: 4,
        nombre: "margarita",
        ingredientes: ["queso mozzarella", "albahaca fresca"],
        precio: 2400,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["queso azul", "queso gorgonzola", "queso cremoso", "queso parmesano", "oregano"],
        precio: 2100,
    },
    {
        id: 6,
        nombre: "hawaiana",
        ingredientes: ["queso mozzarella", "piña", "doble jamon"],
        precio: 700,
    },
];

const idImpares = Pizzas.filter( (pizzas) => {
    return pizzas.id % 2 === 1;
});

console.log(idImpares);

idImpares.forEach( (pizza) => {
    console.log(`La pizzas ${pizza.nombre} no tienen promo compras una te llevas 2`);
});

const Economizar = (precio) => {
    return Pizzas.some ( (pizza) => {
        return pizza.precio > precio;
    })
        ? console.log(`No hay pizzas con precio menor a $${precio}`)
        : console.log(`Hay pizzas con precio menor a $${precio}`);
}

Economizar(600);

const PrecioNombre = Pizzas.filter ((pizzas) => {
    return pizzas.nombre && pizzas.precio
})

PrecioNombre.forEach ( (pizzas) => {
    console.log (`Tenemos pizza ${pizzas.nombre} y su precio es $${pizzas.precio}`)
});

const PizzaIngredientes = Pizzas.filter ((pizzas) => {
    return pizzas.nombre && pizzas.ingredientes
})

PizzaIngredientes.forEach ( (pizzas) => {
    console.log (`Pizza ${pizzas.nombre} sus ingredientes son: ${pizzas.ingredientes}`)
});