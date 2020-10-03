// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the body
var tbody = d3.select("tbody");

// Fill the table with all the default data
tableData.forEach(ufoIncidents => {
    var row = tbody.append("tr");
    Object.entries(ufoIncidents).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the table
    tbody.html("");

    // Select the input element and get the raw HTML node
    var datetimeInput = d3.select("#datetime");
    var cityInput = d3.select("#city");

    // Get the value property of the input element
    var datetimeValue = datetimeInput.property("value");
    var cityValue = cityInput.property("value");

    // Would be good to add some checking here to make sure the value inserted by the users can be
    //   directly compared to the datetime value from the data and clean it up if possible

    // Print the value to the console
    console.log(datetimeValue);
    console.log(cityValue);

    // Filter the table data down to the date entered
    var filtered = tableData.filter(ufoIncident => ufoIncident.datetime === datetimeValue &&
                                                   ufoIncident.city === cityValue);

    // Fill the table with the now filtered data
    filtered.forEach(ufoIncidents => {
        var row = tbody.append("tr");
        Object.entries(ufoIncidents).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

