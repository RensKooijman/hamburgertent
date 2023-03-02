const burgers = [
  { name: 'Big King XL',
    price: 5.95,
    picture: 'bigking.png'
  },
  { name: 'Bacon King XL',
    price: 6.15,
    picture: 'baconking.png'
  },
  { name: 'Crispy Chicken',
    price: 4.90,
    picture: 'crispychicken.png'
  },
  { name: 'King Pollo',
    price: 4.50,
    picture: 'kingpollo.png'
  },
  { name: 'Whopper',
    price: 3.95,
    picture: 'whopper.png'
  },
  { name: 'Angry Whopper',
    price: 5.20,
    picture: 'whopperangry.png'
  }
]
function comparePrices(a, b) {
  return a.price - b.price;
}

burgers.sort(comparePrices);

function init() {
  const element = document.querySelector('.menu')
  
  burgers.forEach(burger => {
    let burgerName = burger.name;
    let burgerPrice = burger.price;
    let burgerPicture = burger.picture;
    const burgerDiv = document.createElement('li');
    burgerDiv.innerHTML = '<img src=img/' + burgerPicture + '></img><h1>' + burgerName + '</h1><p>€' + burgerPrice.toFixed(2) + '</p>';
    element.append(burgerDiv);
  });
}
