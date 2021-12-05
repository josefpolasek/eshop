// data structures
const categories = {
  books: [],
}

// temporary solution
$(document).ready(function () {
  $.ajax({
    url: "./database/sheet.csv",
    dataType: "text",
    success: function (data) {
      const products_raw = data.split(/\r?\n|\r/);
      // console.log(products_raw[1]);
      const products = [];
      for (let i = 0; i < products_raw.length; i++) {
        let cell_data = products_raw[i].split(",", 5);
        categories.books.push(cell_data);
        // products.push(/* Date.now(), */ cell_data);
      }
      console.log(categories.books);
      display(categories.books);
    }
  });

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