import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You Have ${faker.datatype.number()} items</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");

  if (el) {
    mount(el);
  }
}

export { mount };
