import faker from "faker";

const cartText = `<div>You Have ${faker.datatype.number()} items</div>`;

document.querySelector("#dev-cart").innerHTML = cartText;
