function myFirstFunction() {
    return "greetings";
}

const myVariableFunction = function () {
    console.log("Hello it's me - The anonymous function!");
};

const myArrowFunction = () => {
    console.log("Hello from the anonymous function which is also an arrow function");
};

function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

const sayHi = () => {
    console.log("Hi");
}

sayHiLater(sayHi);

function sayHelloLater(anyFunctionReference) {
    anyFunctionReference();
}

const sayHello = () => {
    console.log("Hello");
}

sayHelloLater(sayHello);

function interact(genericInteraction, name) {
    genericInteraction(name);
}


const poke = (name) => {
    //console.log("poke " + name);
    return "Poke " + name;
}

interact(poke, "Joe");

interact((name) => "Lick " + name, "Mama");