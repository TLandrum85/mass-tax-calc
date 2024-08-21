// Define tax rates
var taxRateUnder50k = 0.05;
var taxRateBetween50kAnd100k = 0.055;
var taxRateOver100k = 0.06;

console.log("Tax rates set:", taxRateUnder50k, taxRateBetween50kAnd100k, taxRateOver100k);

// Get HTML elements
var inputFromHTML = document.querySelector("input");
var formFromHTML = document.querySelector("form");
var resultElement = document.querySelector("#result");

console.log("HTML elements selected:", inputFromHTML, formFromHTML, resultElement);

// Add event listener to form
formFromHTML.addEventListener("submit", function(event) {
    console.log("Form submitted");
    
    // Prevent form from refreshing page
    event.preventDefault();
    console.log("Default form submission prevented");

    // Get income value from input
    var grossIncome = Number(inputFromHTML.value);
    console.log("Gross income entered:", grossIncome);

    // Initialize tax due
    var taxDue = 0;

    // Calculate tax based on income
    if (grossIncome <= 50000) {
        taxDue = grossIncome * taxRateUnder50k;
        console.log("Tax calculated for income under 50k");
    } else if (grossIncome <= 100000) {
        taxDue = 50000 * taxRateUnder50k + (grossIncome - 50000) * taxRateBetween50kAnd100k;
        console.log("Tax calculated for income between 50k and 100k");
    } else {
        taxDue = 50000 * taxRateUnder50k + 50000 * taxRateBetween50kAnd100k + (grossIncome - 100000) * taxRateOver100k;
        console.log("Tax calculated for income over 100k");
    }

    console.log("Tax due calculated:", taxDue);

    // Calculate net income
    var netIncome = grossIncome - taxDue;
    console.log("Net income calculated:", netIncome);

    // Prepare result message
    var resultMessage = "Your gross income is $" + grossIncome.toFixed(2) + 
                        ". Tax due: $" + taxDue.toFixed(2) + 
                        ". Net income: $" + netIncome.toFixed(2);
    
    console.log("Result message created:", resultMessage);

    // Display result on page
    resultElement.textContent = resultMessage;
    console.log("Result displayed on page");
});

console.log("Event listener added to form");
