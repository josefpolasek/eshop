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
        let cell_data = products_raw[i].split(",", 7);

        // push by types 
        if (cell_data[2] === "book") categories.books.push(cell_data);
        else if (cell_data[2] === "clothes") categories.clothes.push(cell_data);
        else if (cell_data[2] === "computer") categories.computer.push(cell_data);
        else if (cell_data[2] === "furniture") categories.furniture.push(cell_data);
      }

      // initial
      showEverything();
      $("#low").css("background-color", "lightgrey");
      $("#low").prop("disabled", true);
      $("#price_range").css("visibility","hidden");
    }
  });
  /* //////////// END OF 'CHANGE TO MYSQL' ////////////  */

  /* ////// REDIRECTING TO ANOTHER PAGES ////// */
  $("#login").click(function () {
    window.location.assign("./html/login.html");
  });

  $("#cart").click(function () {

    // export the array
    console.log(productsCart);
    // localStorage.setItem("array", arrayTMP);

    localStorage.setItem("productsCart", JSON.stringify(productsCart));

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
        <img src="${item[5]}" alt="product photo">
        <h2>${item[1]}</h2>
        <h3>${item[4]}</h3>
          `;

      $("#productBoard").append(c);
      });

      });
  };

//   $("#categories").click(function () {
//     console.log("hi");
//   });

  $("#books").click(function () {
    $("aside div").css("background-color", "white");
    $("#books").css("background-color", "lightgrey");
    display(categories.books);
  });

  $("#clothes").click(function () {
    $("aside div").css("background-color", "white");
    $("#clothes").css("background-color", "lightgrey");
    display(categories.clothes, false);
  });

  $("#furniture").click(function () {
    $("aside div").css("background-color", "white");
    $("#furniture").css("background-color", "lightgrey");
    display(categories.furniture, false);
  });

  $("#computer").click(function () {
    $("aside div").css("background-color", "white");
    $("#computer").css("background-color", "lightgrey");
    display(categories.computer, false);
  });

  /* //////////// SORT BY PRICE //////////// */
  $("#low").click(function () {
    $(".header button").css("background-color", "white");
    $("#low").css("background-color", "lightgrey");
    $("#high").prop("disabled", false);
    $("#custom").prop("disabled", false);
    $("#price_range").css("visibility","hidden");
    
    $("#high").removeClass("clicked");
    $("#custom").removeClass("clicked");

    $("#low").addClass("clicked");
    $("#low").prop("disabled", true);


    display(null, true);
  });

  $("#high").click(function () {
    $(".header button").css("background-color", "white");
    $("#high").css("background-color", "lightgrey");
    $("#custom").prop("disabled", false);
    $("#low").prop("disabled", false);
    $("#price_range").css("visibility","hidden");

    $("#low").removeClass("clicked");
    $("#custom").removeClass("clicked");

    $("#high").addClass("clicked");
    $("#high").prop("disabled", true);

    display(null, true);
  });

  $("#custom").click(function () {
    $(".header button").css("background-color", "white");
    $("#custom").css("background-color", "lightgrey");
    $("#high").prop("disabled", false);
    $("#low").prop("disabled", false);

    $("#price_range").css("visibility","visible");
    $("#custom").addClass("clicked");
    $("#custom").prop("disabled", true);
    
    // display(null, true);
  });


  /* //////// _ _ _ //////// */
  function display(products, sort) {
    $("#productBoard").html("");
    console.log(products);
    
    if (sort) { 
      products = JSON.parse(localStorage.getItem("products"));;
    }    

    if($("#low").hasClass("clicked")) 
      products = products.slice().reverse();

    if ($("#high").hasClass("clicked"))
      products = products.slice().reverse();
    
    console.log(products);

    products.forEach(item => {

      let c = document.createElement("div");
      c.setAttribute("class", "card");
      c.innerHTML = `
        <img src="${item[5]}" alt="product photo">
        <h2>${item[1]}</h2>
        <h3>${item[4]}</h3>
          `;

      $("#productBoard").append(c);
      // end 

      window.localStorage.removeItem("products");
      localStorage.setItem("products", JSON.stringify(products));
    });
  };

});
