const Pizzas = [

    {
        id: 1,
        nombre: "napolitana",
        ingredientes: ["jamon","queso","tomate","oregano"],
        precio: 750,
    },
    {
        id: 2,
        nombre: "margarita",
        ingredientes: ["jamon","queso","tomate","oregano"],
        precio: 899,
    },
    {
        id: 3,
        nombre: "primavera",
        ingredientes: ["jamon","queso","tomate","oregano"],
        precio: 1350,
    },
    {
        id: 4,
        nombre: "margarita",
        ingredientes: ["jamon","queso","tomate","oregano"],
        precio: 2400,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["jamon","queso","tomate","oregano"],
        precio: 2100,
    },
    {
        id: 6,
        nombre: "margarita",
        ingredientes: ["jamon","queso","tomate","oregano"],
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