//Clases Instant
const cryptoAPI = new CryptoAPI();
const ui = new UI();

//Variables
const form = document.getElementById('form');



//Event Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();

  //read value from fields
  const currencySelect = document.getElementById('currency').value;
  const cryptoSelect = document.getElementById('cryptocurrency').value;

  //validate form
  if(currencySelect === '' || cryptoSelect === '') {
    ui.printMessage('All fields are mandatory', 'deep-orange darken-4 card-panel');
  }else {
    cryptoAPI.queryAPI(currencySelect, cryptoSelect)
      .then(data => {
        ui.displayResult(data.result[0], currencySelect);
      })
  }
})
