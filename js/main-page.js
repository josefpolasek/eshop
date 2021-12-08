// data structures
const categories = {
    books: [],
    clothes: [],
    computer: [],
    furniture: [],
}

let categoriesArray = [];

let cartContent = [];

let displayedProducts = [];

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
                
                categoriesArray.push(cell_data);
            }

            // initial
            $("#low").css("background-color", "lightgrey");
            $("#low").prop("disabled", true);
            $("#price_range").css("visibility", "hidden");

            $("aside div").css("background-color", "white");
            $("#everything").css("background-color", "lightgrey");

            displayedProducts = categoriesArray;
            display(displayedProducts);
        }
    });
    /* //////////// END OF 'CHANGE TO MYSQL' ////////////  */

    /* ////// REDIRECTING TO ANOTHER PAGES ////// */
    $("#login").click(function () {
        window.location.assign("./html/login.html");
    });

    $("#cart").click(function () {

        // export the array
        console.log(cartContent);

        localStorage.setItem("cartContent", JSON.stringify(cartContent));

        window.location.assign("./html/cart.html");
    });

    /* //////// SELECT A  CATEGORY //////// */

    $("#everything").click(function () {
        $("aside div").css("background-color", "white");
        $("#everything").css("background-color", "lightgrey");

        displayedProducts = categoriesArray;
        display(displayedProducts);
    });

    /* 
    function showEverything() {
      $("#productBoard").html("");
  
      $("aside div").css("background-color", "white");
      $("#everything").css("background-color", "lightgrey");
  
      Object.values(categories).forEach(val => {
        val.forEach(item => {
        let c = document.createElement("div");
        c.setAttribute("class", "card");
        c.setAttribute("data-key", item[0]);
        c.innerHTML = `
          <img src="${item[5]}" alt="product photo">
          <h2>${item[1]}</h2>
          <h3>${item[4]}</h3>
            `;
  
        $("#productBoard").append(c);
        });
  
        });
    };
   */
    //   $("#categories").click(function () {
    //     console.log("hi");
    //   });

    $("#books").click(function () {
        $("aside div").css("background-color", "white");
        $("#books").css("background-color", "lightgrey");
       
        displayedProducts = categories.books;
        display(displayedProducts);
    });

    $("#clothes").click(function () {
        $("aside div").css("background-color", "white");
        $("#clothes").css("background-color", "lightgrey");
        
        displayedProducts = categories.clothes;
        display(displayedProducts);
    });

    $("#furniture").click(function () {
        $("aside div").css("background-color", "white");
        $("#furniture").css("background-color", "lightgrey");

        displayedProducts = categories.furniture;
        display(categories.furniture);
    });

    $("#computer").click(function () {
        $("aside div").css("background-color", "white");
        $("#computer").css("background-color", "lightgrey");

        // console.log(categories.computer);

        displayedProducts = categories.computer;
        display(displayedProducts);
    });

    /* //////////// SORT BY PRICE //////////// */
    let sortBy = 0;

    $("#low").click(function () {
        $(".header button").css("background-color", "white");
        $("#low").css("background-color", "lightgrey");

        $("#high").prop("disabled", false);
        $("#custom").prop("disabled", false);
        $("#low").prop("disabled", true);

        $("#price_range").css("visibility", "hidden");

        sortBy = 0;
        display(displayedProducts);
    });

    $("#high").click(function () {
        $(".header button").css("background-color", "white");
        $("#high").css("background-color", "lightgrey");

        $("#custom").prop("disabled", false);
        $("#low").prop("disabled", false);
        $("#high").prop("disabled", true);

        $("#price_range").css("visibility", "hidden");

        sortBy = 1;
        display(displayedProducts);
    });

    $("#custom").click(function () {
        $(".header button").css("background-color", "white");
        $("#custom").css("background-color", "lightgrey");

        $("#high").prop("disabled", false);
        $("#low").prop("disabled", false);
        $("#custom").prop("disabled", true);

        $("#price_range").css("visibility", "visible");

        sortBy = 2;
        display(displayedProducts);
    });

    $("#applyCustom").click(function () {

        if ($("#minPrice")[0].value === "" && $("#maxPrice")[0].value === "") {
            alert("Please insert some values!");
            return;
        }
        
        sortBy = 3;
        display(displayedProducts, 3);
    });


    /* //////// _ _ _ //////// */
    function display(products) {
        $("#productBoard").html("");
        
        if (sortBy === 0 || sortBy === 2) {
            for (let i = 0; i < products.length; i++) {    
                let c = document.createElement("div");
                c.setAttribute("class", "card");
                c.setAttribute("data-key", products[i][0]);
                c.innerHTML = `
                <img src="${products[i][5]}" alt="product photo">
                <h2>${products[i][1]}</h2>
                <h3>${products[i][4]}</h3>
                <button>Buy item</button>
              `;
    
                $("#productBoard").append(c);
                // end
            };
        } else if (sortBy === 1) {
            for (let i = products.length-1; i >= 0; i--) {    
                let c = document.createElement("div");
                c.setAttribute("class", "card");
                c.setAttribute("data-key", products[i][0]);
                c.innerHTML = `
                <img src="${products[i][5]}" alt="product photo">
                <h2>${products[i][1]}</h2>
                <h3>${products[i][4]}</h3>
                <button>Buy item</button>
              `;
    
                $("#productBoard").append(c);
                // end
            };
        } else if (sortBy === 3) {
            let minRange = parseInt($("#minPrice")[0].value);
            let maxRange = parseInt($("#maxPrice")[0].value);

            for (let i = 0; i < products.length; i++) {
                if (products[i][4] < minRange) continue;    
                else if (products[i][4] > maxRange) return;

                let c = document.createElement("div");
                c.setAttribute("class", "card");
                c.setAttribute("data-key", products[i][0]);
                c.innerHTML = `
                <img src="${products[i][5]}" alt="product photo">
                <h2>${products[i][1]}</h2>
                <h3>${products[i][4]}</h3>
                <button>Buy item</button>
              `;
    
                $("#productBoard").append(c);
                // end
            };
        }
    };

    //add one event listener to the whole grid
    $("#productBoard").click(item => {

        if (item.target.nodeName === "BUTTON") {
            const idNum = item.target.parentElement.getAttribute("data-key");
            
            // console.log(idNum);
            // console.log(categoriesArray[idNum]);

            cartContent.push(categoriesArray[idNum])
            // addToCart(id);
        };
    });

    /* function addToCart(id) {

    } */

});
