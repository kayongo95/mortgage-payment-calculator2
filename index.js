// script.js

function calculatePayment() {
    // Get the input values
    const loanAmount = document.getElementById('loan-amount').value;
    const annualInterestRate = document.getElementById('interest-rate').value;
    const loanTermYears = document.getElementById('loan-term').value;

    // Convert annual interest rate to monthly and loan term to months
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTermYears * 12;

    // Calculate the monthly payment using the formula
    const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Display the result, formatted to 2 decimal places
    document.getElementById('monthly-payment').innerText = `$${monthlyPayment.toFixed(2)}`;
}
