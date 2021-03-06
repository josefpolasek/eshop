$(document).ready(function () {

  const data = JSON.parse(localStorage.getItem("cartContent"));
  console.log(data);


  /*   var data = [
      [
        1234,
        "Developer",
        'computer',
        2,
        59.99,
        "../klaus.jpg"
      ],
      [
        2345,
        "Ahoj",
        'computer',
        2,
        59.99,
        "../klaus.jpg"
      ],
      [
        3456,
        "Developer",
        'computer',
        2,
        59.99,
        "../klaus.jpg"
      ]
    ];
 */


  showItems(data)

  //render the actual content
  function showItems(items) {
    $("#table-grid").html('');

    //for each element
    items.forEach(function (oneItem) {
      // console.log(oneItem);
      // return;

      //create an object
      const oneElement = document.createElement('div');

      oneElement.setAttribute('class', 'element');
      oneElement.setAttribute('data-key', oneItem[0]);
      oneElement.innerHTML = `
        <button type="button" class="btn btn-trash">
            <div class="trash-container">

            <div>
        </button>
      `;
      //add the coresponding image
      const oneImage = document.createElement('div');
      oneImage.setAttribute('class', 'thumb');
      oneImage.setAttribute('style', "background-image: url(" + oneItem[5] + ")");

      //add the coresponding title
      const oneName = document.createElement("h4");
      oneName.innerText = oneItem[1];

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
      inputAmount.setAttribute('value', oneItem[3]);
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
      oneUnitPrice.innerText = oneItem[4];
      onePrice.appendChild(oneUnitPrice);

      const symbols = document.createElement('h2');
      symbols.innerText = '\u00a0USD =\u00a0';
      onePrice.appendChild(symbols);

      const finalPrice = document.createElement('h2');
      finalPrice.setAttribute('class', 'final_price');
      finalPrice.innerText = oneItem[4] * oneItem[3];
      onePrice.appendChild(finalPrice);

      const symbolsTwo = document.createElement('h2');
      symbolsTwo.innerText = '\u00a0USD';
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
    console.log(data);
    // filters out the elements based on deleted elements id's
    data = data.filter(function (item) {

      return item[0] != id;
    });

    //show the updated content
    //saveToStorage(items);
    console.log(data);
    showItems(data);
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
      data.forEach(function (oneItem) {

        if (oneItem[0] == idShort) {
          oneItem[3] = oneItem[3] + 1;
        }
      });
    } else if (item.target.classList.contains("btn-minus")) {

      const idShort = item.target.parentElement.parentElement.getAttribute("data-key");
      data.forEach(function (oneItem) {

        if (oneItem[0] == idShort) {

          if (oneItem[3] == 1) {

            deleteItem(idShort);

          } else {

            oneItem[3] = oneItem[3] - 1;
          }
        }
      });
    }
    showItems(data);
  });

  $("#go_back").click(function () {

    window.location.assign("../index.html");
  });


});
