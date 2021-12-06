$(document).ready(function(){

items = [
  {
    itemId: 1234,
    name: "Developer",
    picture: "../klaus.jpg",
    amount: 1,
    price: 12
  },
  {
    itemId: 2345,
    name: "Developer",
    picture: "../klaus.jpg",
    amount: 1,
    price: 3
  },
  {
    itemId: 3456,
    name: "Developer",
    picture: "../klaus.jpg",
    amount: 1,
    price: 2
  }
];

const tableGrid = document.getElementById("table-grid");

showItems(items);

//render the actual content
function showItems(items) {

  tableGrid.innerHTML = '';

  //for each element
  items.forEach(function(oneItem) {
  //create an object
  const oneElement = document.createElement('div');

  oneElement.setAttribute('class', 'element');
  oneElement.setAttribute('data-key', oneItem.itemId);
  oneElement.innerHTML = `
    <button type="button" class="btn btn-trash">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
        </svg>
    </button>
  `;
  //add the coresponding image
  const oneImage = document.createElement('div');
  oneImage.setAttribute('class', 'thumb');
  oneImage.setAttribute('style', "background-image: url("+oneItem.picture+")");

  //add the coresponding title
  const oneName = document.createElement("h4");
  oneName.innerText = oneItem.name;

  //add the amount setter
  const oneSetAmount = document.createElement("div");
  oneSetAmount.setAttribute('class', 'set_amount');

  const oneBtnMinus = document.createElement("button");
  oneBtnMinus.setAttribute('type', 'button');
  oneBtnMinus.setAttribute('name', 'button');
  oneBtnMinus.setAttribute('class', 'btn-minus');
  oneBtnMinus.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-minus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
  `;
  const inputAmount = document.createElement("input");
  inputAmount.setAttribute('type', 'text');
  inputAmount.setAttribute('class','set_amount_input');
  inputAmount.setAttribute('value', oneItem.amount);
  const oneBtnPlus = document.createElement("button");
  oneBtnPlus.setAttribute('type', 'button');
  oneBtnPlus.setAttribute('name', 'button');
  oneBtnPlus.setAttribute('class', 'btn-plus');
  oneBtnPlus.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
  `;
  oneSetAmount.appendChild(oneBtnMinus);
  oneSetAmount.appendChild(inputAmount);
  oneSetAmount.appendChild(oneBtnPlus);

  //add the price element
  const onePrice = document.createElement("div");
  onePrice.setAttribute('class','price');
  onePrice.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `;
  const oneUnitPrice = document.createElement('h2');
  oneUnitPrice.setAttribute('class','unit_price');
  oneUnitPrice.innerText = oneItem.price;
  onePrice.appendChild(oneUnitPrice);

  const symbols = document.createElement('h2');
  symbols.innerText = '\u00a0CZK =\u00a0';
  onePrice.appendChild(symbols);

  const finalPrice = document.createElement('h2');
  finalPrice.setAttribute('class','final_price');
  finalPrice.innerText = oneItem.price * oneItem.amount;
  onePrice.appendChild(finalPrice);

  const symbolsTwo = document.createElement('h2');
  symbolsTwo.innerText = '\u00a0CZK';
  onePrice.appendChild(symbolsTwo);


  //add everything to the element
  oneElement.appendChild(oneImage);
  oneElement.appendChild(oneName);
  oneElement.appendChild(oneSetAmount);
  oneElement.appendChild(onePrice);

  //add element to the grid
  $('#table-grid').append(oneElement);
  });
}


function deleteItem(id) {
  console.log(items);
  // filters out the elements based on deleted elements id's
  items = items.filter(function(item) {

    return item.itemId != id;
  });

  //show the updated content
  //saveToStorage(items);
  console.log(items);
  showItems(items);
}

//add one event listener to the whole grid
tableGrid.click(item => {
        if (item.target.classList.contains("btn-trash")) {
            const idShort = item.target.parentElement.getAttribute("data-key");
            deleteItem(idShort);
        };
});

















});
