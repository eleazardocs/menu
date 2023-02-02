// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

// items
const menu = [
  {
    id: 1,
    title: "Brochetas de Aceitunas",
    category: "plato·Fuerte",
    price: 15.99,
    img: "item-1.jpeg",
    desc: `Aceitunas negras, Tomates cherry, Jamón serrano, Melón. `,
  },
  {
    id: 2,
    title: "Brownies",
    category: "postres",
    price: 13.99,
    img: "item-2.jpeg",
    desc: `¡No hay nada mejor que acompañe este pedazo de chocolate que una buena bocha de helado de el sabor que prefieran... El chocolate siempre va con todo! `,
  },
  {
    id: 3,
    title: "Laguna Azul",
    category: "bebidas",
    price: 6.99,
    img: "item-3.jpeg",
    desc: `Muy vistoso e ideal para disfrutar el fin de semana previo a una rica comidita.`,
  },
  {
    id: 4,
    title: "Brochetas de Jamon, Queso y Pina",
    category: "plato·Fuerte",
    price: 20.99,
    img: "item-4.jpeg",
    desc: `Tan sencilla como cortar la piña en trozos, el queso en otros más o menos del mismo tamaño, y el jamón cocido, e ir insertándolos en la brocheta, rematando con unas pasas.    `,
  },
  {
    id: 5,
    title: "Cupcakes De Chocolate",
    category: "postres",
    price: 22.99,
    img: "item-5.jpeg",
    desc: `Estos deliciosos cupcakes son de lo mejor, muy esponjosos y con un delicioso sabor a chocolate, más si agregamos chispas.`,
  },
  {
    id: 6,
    title: "Sangria",
    category: "bebidas",
    price: 18.99,
    img: "item-6.jpeg",
    desc: `Bebida alcohólica preparada originaria de España y Portugal. Aunque existen multitud de recetas, generalmente consiste en vino, trozos de fruta, gaseosa, algún licor y azúcar.`,
  },
  {
    id: 7,
    title: "Mini Sandwiches",
    category: "plato·Fuerte",
    price: 8.99,
    img: "item-7.jpeg",
    desc: `Contienen queso jamon tomate, lechuga mayo. `,
  },
  {
    id: 8,
    title: "Frutas de Arcoiris / Rainbow Fruits",
    category: "postres",
    price: 12.99,
    img: "item-8.jpeg",
    desc: `Son una verdadera delicia.  `,
  },
  {
    id: 9,
    title: "Pina Colada",
    category: "bebidas",
    price: 16.99,
    img: "item-9.jpeg",
    desc: `Bebida cuyos ingredientes principales son la piña, la crema de coco y el ron.`,
  },
  {
    id: 10,
    title: "Mini Pankek",
    category: "postres",
    price: 39.99,
    img: "item-10.jpeg",
    desc: `Ideales para comer con un poco de miel o dulce de leche.`,
  },
  {
    id: 11,
    title: "Mousse De Fresa",
    category: "postres",
    price: 39.99,
    img: "item-11.jpeg",
    desc: `Postre de origen francés, cuya traducción al español significa “espuma”.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item"><a href=${item.id}.html>
          <img src=${item.img} class="photo" alt=${item.title} /></a>
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["todo"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "todo") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
