// data structures
const categories = {
  books: [],
  clothes: [],
  computer: [],
  furniture: [], 
}

// temporary solution
$(document).ready(function () {
  /* //////////// CHANGE TO MYSQL ////////////  */
  $.ajax({
    url: "./database/sheet.csv",
    dataType: "text",
    success: function (data) {
      const products_raw = data.split(/\r?\n|\r/);
      for (let i = 0; i < products_raw.length; i++) {
        let cell_data = products_raw[i].split(",", 5);

        // push by types 
        if (cell_data[1] === "book") categories.books.push(cell_data);
        else if (cell_data[1] === "clothes") categories.clothes.push(cell_data);
        else if (cell_data[1] === "computer") categories.computer.push(cell_data);
        else if (cell_data[1] === "furniture") categories.furniture.push(cell_data);
      }

      // initial
      showEverything();
      $("#low").css("background-color", "lightgrey");
    }
  });


  /* //////////// END OF 'CHANGE TO MYSQL' ////////////  */

  // initial

  /* ////// REDIRECTING TO ANOTHER PAGES ////// */
  $("#login").click(function () {
    window.location.assign("./html/login.html");
  });

  $("#cart").click(function () {

    // export the array
    const arrayTMP = [];
    arrayTMP.push(categories.books);
    console.log(arrayTMP);
    // localStorage.setItem("array", arrayTMP);

    localStorage.setItem("arrayTMP", JSON.stringify(arrayTMP));

    window.location.assign("./html/cart.html");
  });

  /* //////// SELECT A  CATEGORY //////// */
  
  $("#everything").click(function () {
    showEverything();
      // console.log(val);/
    // });
    // display(categories  );
  });

  function showEverything() {
    $("#productBoard").html("");

    $("aside div").css("background-color", "white");
    $("#everything").css("background-color", "lightgrey");

    Object.values(categories).forEach(val => {
      val.forEach(item => {
        let c = document.createElement("div");
      c.setAttribute("class", "card");
      c.innerHTML = `
        <img src="${item[4]}" alt="product photo">
        <h2>${item[0]}</h2>
        <h3>${item[3]}</h3>
          `;

      $("#productBoard").append(c);
      });

      });
  };
  
  $("#books").click(function () {
    $("aside div").css("background-color", "white");
    $("#books").css("background-color", "lightgrey");
    display(categories.books);
  });

  $("#clothes").click(function () {
    $("aside div").css("background-color", "white");
    $("#clothes").css("background-color", "lightgrey");
    display(categories.clothes);
  });

  $("#furniture").click(function () {
    $("aside div").css("background-color", "white");
    $("#furniture").css("background-color", "lightgrey");
    display(categories.furniture);
  });

  $("#computer").click(function () {
    $("aside div").css("background-color", "white");
    $("#computer").css("background-color", "lightgrey");
    display(categories.computer);
  });

  /* //////// SORT BY PRICE //////// */
  $("#low").click(function () {
    $(".header button").css("background-color", "white");
    $("#low").css("background-color", "lightgrey");
    
  });

  $("#high").click(function () {
    $(".header button").css("background-color", "white");
    $("#high").css("background-color", "lightgrey");
    
  });

  $("#custom").click(function () {
    $(".header button").css("background-color", "white");
    $("#custom").css("background-color", "lightgrey");
    
  });


  /* //////// _ _ _ //////// */
  function display(products) {
    $("#productBoard").html("");

    // console.log(products);
    
    products.slice().reverse().forEach(item => {
      // console.log(item);
      // console.log(item[3]);
      // console.log(item[0]);

      let c = document.createElement("div");
      c.setAttribute("class", "card");
      c.innerHTML = `
        <img src="${item[4]}" alt="product photo">
        <h2>${item[0]}</h2>
        <h3>${item[3]}</h3>
          `;

      $("#productBoard").append(c);
      // end 
    });
  };

});
