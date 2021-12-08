$(document).ready(function () {

  const data = JSON.parse(localStorage.getItem("arrayTMP"));
  console.log(data);
  //return;

  // const data = require ("load-sql.js");
  // const data = require('./array.js');

  var items = [
    {
      itemId: 1234,
      name: "Developer",
      picture: "../klaus.jpg",
      amount: 2,
      price: 12
    },
    {
      itemId: 2345,
      name: "Developer",
      picture: "../klaus.jpg",
      amount: 3,
      price: 3.5
    },
    {
      itemId: 3456,
      name: "Covid je levicový.",
      picture: "../klaus.jpg",
      amount: 5,
      price: 2
    }
  ];



  showItems(items)

  //render the actual content
  function showItems(items) {

    //$("#table-grid").innerHTML = '';

    $("#table-grid").html('');
    console.log(items);
    //for each element
    items.forEach(function (oneItem) {
      //create an object
      const oneElement = document.createElement('div');

      oneElement.setAttribute('class', 'element');
      oneElement.setAttribute('data-key', oneItem.itemId);
      oneElement.innerHTML = `
    <button type="button" class="btn btn-trash">
        <div class="trash-container">

        <div>
    </button>
  `;
      //add the coresponding image
      const oneImage = document.createElement('div');
      oneImage.setAttribute('class', 'thumb');
      oneImage.setAttribute('style', "background-image: url(" + oneItem.picture + ")");

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
      oneBtnMinus.innerText = '-';
      /*oneBtnMinus.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-minus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      `;*/
      const inputAmount = document.createElement("input");
      inputAmount.setAttribute('type', 'text');
      inputAmount.setAttribute('class', 'set_amount_input');
      inputAmount.setAttribute('value', oneItem.amount);
      const oneBtnPlus = document.createElement("button");
      oneBtnPlus.setAttribute('type', 'button');
      oneBtnPlus.setAttribute('name', 'button');
      oneBtnPlus.setAttribute('class', 'btn-plus');
      oneBtnPlus.innerText = '+';
      /*oneBtnPlus.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      `;*/
      oneSetAmount.appendChild(oneBtnMinus);
      oneSetAmount.appendChild(inputAmount);
      oneSetAmount.appendChild(oneBtnPlus);

      //add the price element
      const onePrice = document.createElement("div");
      onePrice.setAttribute('class', 'price');
      onePrice.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `;
      const oneUnitPrice = document.createElement('h2');
      oneUnitPrice.setAttribute('class', 'unit_price');
      oneUnitPrice.innerText = oneItem.price;
      onePrice.appendChild(oneUnitPrice);

      const symbols = document.createElement('h2');
      symbols.innerText = '\u00a0CZK =\u00a0';
      onePrice.appendChild(symbols);

      const finalPrice = document.createElement('h2');
      finalPrice.setAttribute('class', 'final_price');
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
    items = items.filter(function (item) {

      return item.itemId != id;
    });

    //show the updated content
    //saveToStorage(items);
    console.log(items);
    showItems(items);
  }

  //add one event listener to the whole grid
  $("#table-grid").click(item => {
    console.log("Grid clicked!");
    if (item.target.classList.contains("trash-container")) {
      const idShort = item.target.parentElement.parentElement.getAttribute("data-key");
      deleteItem(idShort);
    };
  });

  //add one event listener to the whole grid
  $("#table-grid").click(item => {
    console.log("Grid clicked!");
    if (item.target.classList.contains("btn-plus")) {

      const idShort = item.target.parentElement.parentElement.getAttribute("data-key");
      items.forEach(function (oneItem) {

        if (oneItem.itemId == idShort) {
          oneItem.amount = oneItem.amount + 1;
        }
      });
    } else if (item.target.classList.contains("btn-minus")) {

      const idShort = item.target.parentElement.parentElement.getAttribute("data-key");
      items.forEach(function (oneItem) {

        if (oneItem.itemId == idShort) {

          if (oneItem.amount == 1) {

            deleteItem(idShort);

          } else {

            oneItem.amount = oneItem.amount - 1;
          }
        }
      });
    }
    showItems(items);
  });

















});
