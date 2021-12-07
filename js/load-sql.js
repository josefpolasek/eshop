// data structures
const categories = {
  books: [],
  clothes: [],
  smartphones: [],
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
        else if (cell_data[1] === "clothes") categories.books.push(cell_data);
        else if (cell_data[1] === "smartphones") categories.books.push(cell_data);
      }
      console.log(categories);
      display(categories.books);
    }
  });
  /* //////////// END OF 'CHANGE TO MYSQL' ////////////  */

  function display(products) {
    $("#productBoard").html("");

    products.forEach(item => {
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