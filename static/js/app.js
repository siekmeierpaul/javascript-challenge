// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufoIncidents) => {
    var row = tbody.append("tr");
    Object.entries(ufoIncidents).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  