document.getElementById("hamburger").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
});

const menuButtons = document.querySelectorAll(".menu button");
menuButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.remove("active"); // Ocultar el menú
  });
});

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu");
  const hamburger = document.getElementById("hamburger");

  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove("active");
  }
});

const coches = [
  {
    modelo: "EQE Berlina",
    combustible: "Electrico",
    precio: "105.000",
    carroceria: "Berlina",
    seller: "Mercedes Alemania",
    image:
      "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/ES/295153/805_055/iris.png?q=COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGyjtsd2HtcUfp8qXGEubmJ0l3ItOB2NQnbApjtwI5uVKuQC3qvTkzNwT6m7jZeohKVFXM%25vq4t9yLRgc6YaxPa9rH1eCln8wsocoiZUMNM4FGQJTg95Yn6PDCIDSeWHmjtsd8s3cUfiONXGE4TdJ0lgOhOB2PbcbApeIoI5usKYQC3UvWkzNLtnm7jG63hKVUp4%25vq7XFyLRKucYax23arH18B%25n8wiA4oiZ46NM4FgSQTg9P6Z6PKNCZnX2f3SNst5sV9DkSW9wUwopoL24PvEa2zq7dXrCgQ&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "Clase A Berlina",
    combustible: "Electrico",
    precio: "60.000€",
    carroceria: "Berlina",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyjtsd2sDcUfp8fXGEuiRJ0l3IJOB2NMcbApjTlI5ux4YQC31SrkzNBTwm7jAc3hKViSF%25vq4tqyLRgLFYaxPrSrH1yBRn8wYTyoiZB7lM4FAyrTg95Ye6PDCIDSeWHmjtsd8YtcUfiMcXGE4TwJ0lgOrOB2PzFbApETRI5uKMTQmIJwF15s6PDK1ASeWgXhtsdR2vcUfGUyXGE0aSJ0lBHAOB2AQ1bAp5ToI5uCfJQC3zkpkzNtT9m7sDgubYwR9hDsxevdwj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "GLA SUV",
    combustible: "Electrico",
    precio: "70.000€",
    carroceria: "SUV",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyjtsd2sDcUfp8fXGEuiRJ0l3IJOB2NMcbApjTlI5ux5xQC31grkzNwtnm7jAc3hKV5Xt%25vq4t9yLRgcRYaxPa9rH1entn8wYOxoiZr7YM4FACuTg95vp6PDCroSeWzQWtsd8hVcUfiUNXGE4bjJ0lg6JOB2PSFbApeIoI5usKxQC3UvWkzNp%25bm7ja7mhKVHtc%25YhQDd9KBXGEi9SJ0l8qtsyiHRcUaiQxXGJXl1J0OrqwOBbnIZbAID8FI5Qj39QCkGwDkzm18Wm7hdCdhce6CF2iaPfeyUt9U6KVfv75YYHU2GLwvGE10UPbPV7VoztXn5Mzy8YG9vG=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "EQE SUV",
    combustible: "Electrico",
    precio: "113.000€",
    carroceria: "SUV",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlaStsd2JQcUfpO6XGEubXJ0l3otOB2NS1bApRAlI5ux4YQC31g3kzNwP9m7jZcohKVF%25Q%25vq98ZyLRzLyYax7NErH1KnOn8wsOfoiZUbXM4FG4MTg90gE6PDBSqSeWAhItsd6vDcUfKLcXGEvaVJ0lL6tOB2aS1bApenwI5us5xQC3Uh1kzNGJnm7j0O3hKVB%25Q%25vqAycyLR5iDYaxC4SrH1zgin8w7P3oiZebgM4FsmJTg9Ukm6tTnuNpgLhKV0SN%25vqGugyLRKL2Yaxv0WrH1LMOn8waIdoiZHQUM4F8qITg9ibQ6PDVBQSeWsKUtsdUJVcUfGOyXGE0JdJ0loYxOBi1aftkV3xb15IGfZl2rbpldCCNZkFu6pFIT9ZxexrlrKE847dvE5jCFcpF=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop==",
  },
  {
    modelo: "Clase G",
    combustible: "Electrico",
    precio: "196.000€",
    carroceria: "Suv",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqbWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlaWtsd2H%25cUfgUfXGEzymJ0lcItOB2PBqbApekRI5usr2QC3vT6khQOZ9wCUSeW0ZItsdCYQcUfzK6XGE7BjJ0lWJxOB2dXqbApk6RI5ugfaQC3AX7kzNnt9m7jd0ShKVfzF%25vqE3TyLRmYDYaxHrqrH1lM%25n8wMAwoiZkkXM4FRbrTg735wrcldu63yvAKja9Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "Clase A Compacto",
    combustible: "Hibrido enchufable",
    precio: "46.000€",
    carroceria: "Compacto",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyjtsd2sDcUfp8fXGEuiRJ0l3IJOB2NMcbApjTlI5ux4YQC31SrkzNBTwm7jAc3hKViSF%25vq4tqyLRgLFYaxPrSrH1yJRn8wYzyoiZB7lM4FAyrTg95Ye6PDCI6SeWHmjtsd8s3cUfiMcXGE4TwJ0lgOrOB2PzFbAp7oMIkbX1ZxAeTg97xq6PD4cmSeWqgptsdUs%25cUfGL6XGE0aBJ0lBIxOB2AMnbAp5dXI5uCcxQC3zkpkze94pOy1qFm9eRPSW4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "GT Coupé",
    combustible: "Hibrido enchufable",
    precio: "140.000€",
    carroceria: "Coupe",
    seller: "Mercedes España",
    image:
      "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/ES/192378/805_055/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGyjtsd2HdcUfpMqXGEjnmJ0leIJOB2Kr%25bApvAVI5uLmIQC3akpkzN4PZm7j06DhKVBKF%25vqAI%25yLR5QRYaxC4SrH1qM%25n8wzhfoiZCqGM4FNq4Tg9Pt36PDe1mSevjzFoJpENtjvcp815WmtdDZGZMuMapgeLlHp7RKfJnzPk&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "CLE Coupé",
    combustible: "Hibrido enchufable",
    precio: "97.000€",
    carroceria: "Coupe",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtlaWtsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApj7oI5ux5xQC31CpkzNwPnm7jZeDhKV5pV%25vq4tTyLRgLFYaxPrWrH1eOdn8w0Q3oiZBklM4FAyrTg95Ye6PDakNSeWHXutsd8ZDcUfiMcXGE4JmJ0lgOrOB2Pz%25bApe7pI5usKDQC3vM7kzNLt6m7jaSthymI9WF70cUf8FfXGEH97J0lU9YOB2GyrbApF0MI5uC4zQC3zs3kzN7%259m7jKh3hKVvHW%25vqJtdyL0fsjko9wdYfHJyCiNRcYxqN88Zlo21Ix2rbpldCdcqcgVGB4NPVHF82mx2=&imgt=P27&bkgnd=9&pov=BE040&uni=m&width=610&crop=",
  },
  {
    modelo: "CLE Cabrio",
    combustible: "Electrico",
    precio: "116.000€",
    carroceria: "Cabrio",
    seller: "Mercedes España",
    image:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtlaWtsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApj7oI5ux5xQC31CpkzNwPnm7jZeDhKV5Sh%25vqCuqyLRgc6YaxPa9rH1endn8wsbfoiZrJoM4FASlTg95hV6PDC%25uSeWznMtsd7oGcUfi%25qXGE49dJ0lg6JOB2PbnbApe7yI5usKuQC3UvWkzNLTKm7jacShKVHtc%25YhQDd9KBXGEi9EJ0l8DKOB2GDrbAp0YnI5u9BTQC3zg7kzN7UNm7jKyDhKVvYE%25vqLyjyLROcfYaBEUVmMDZfrE8OYT4jxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p=&imgt=P27&bkgnd=9&pov=BE040%2CDZO&uni=m&width=610&crop=",
  },
  {
    modelo: "SL Roadster",
    combustible: "Electrico",
    precio: "146.000€",
    carroceria: "Cabrio",
    seller: "Mercedes España",
    image:
      "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/ES/232481/805_055/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGyjtsd2HdcUfpOyXGEuTRJ0lVYrOB2qBEbApRTyI5uGoIQC30hQkzNBlNm7j86ohKViKw%25vq4yjyLRsGWYaxUoWrH1zJln8w78foiZKq1M4FvyMTg9LY96PDaSbSeWHthtsd8BQcUfiA1XGEWbSJ0l4OVOB2iWvbApF0hI5uCmZQC3zETkzN7mum7sDgubYwR9hDvtwrjwj6hVNpLpIZIGwC7Ux0wPfeqYOgzT&imgt=P27&bkgnd=9&pov=BE040%2CDZO&uni=m&width=610&crop=",
  },
];
const article = document.getElementsByClassName("productos")[0];

function mostrarCoches(coches) {
  article.innerHTML = "";

  if (coches.length === 0) {
    const noCochesMessage = document.createElement("p");
    noCochesMessage.textContent =
      "No hay coches disponibles con los filtros seleccionados.";
    noCochesMessage.className = "no-coches";
    article.appendChild(noCochesMessage);
    return;
  }

  coches.forEach((cars) => {
    const divs = document.createElement("div");
    divs.className = `products ${cars.carroceria.toLowerCase()} ${cars.combustible
      .toLowerCase()
      .replace(/ /g, "-")}`;

    const model = document.createElement("h4");
    model.textContent = cars.modelo;
    model.className = "Model";

    const image = document.createElement("img");
    image.src = cars.image;
    image.className = "images";

    const Combustible = document.createElement("p");
    Combustible.textContent = cars.combustible;
    Combustible.className = "Combustible";

    const price = document.createElement("p");
    price.textContent = cars.precio;
    price.className = "Price";

    const Carroceria = document.createElement("p");
    Carroceria.textContent = cars.carroceria;
    Carroceria.className = "Carroceria";

    const Seller = document.createElement("p");
    Seller.textContent = cars.seller;
    Seller.className = "Seller";

    divs.appendChild(model);
    divs.appendChild(Combustible);
    divs.appendChild(Carroceria);
    divs.appendChild(image);
    divs.appendChild(price);
    divs.appendChild(Seller);

    article.appendChild(divs);
  });
}

mostrarCoches(coches);

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    if (filter === "all") {
      mostrarCoches(coches);
    } else {
      const cochesFiltrados = coches.filter((cars) => {
        const carroceriaClass = cars.carroceria.toLowerCase();
        const combustibleClass = cars.combustible
          .toLowerCase()
          .replace(/ /g, "-");
        return carroceriaClass === filter || combustibleClass === filter;
      });
      mostrarCoches(cochesFiltrados);
    }
    divs.className = `products ${cars.carroceria.toLowerCase()} ${cars.combustible
      .toLowerCase()
      .replace(/ /g, "-")}`;
  });
});
