const FormView = require('./views/form_view.js');
const PrimeNumber = require('./models/prime_number.js')
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();
  console.log('JavaScript Loaded');

  const primeNumber = new PrimeNumber();
  primeNumber.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
