class UI {
  constructor() {
    this.init();
  }

  init() {
    this.printCryptoCurrencies();
  }

  //populate <option> with printCryptoCurrencies
  printCryptoCurrencies() {
    cryptoAPI.getCryptocurrency()
      .then(data => {
        //console.log(data)
        const cryptocurrencies = data.cryptocurrency;
        //console.log(cryptocurrencies)
        //Building the select from the rest api
        const select = document.getElementById('cryptocurrency');
        cryptocurrencies.forEach(currency => {
          const option = document.createElement('option');
          option.value = currency.id;
          option.appendChild(document.createTextNode(currency.name));
          select.appendChild(option);
        })
      })
  }

  //Print a message with two parameter (message and className)
  printMessage (message, className) {
    const div = document.createElement('div');
    //add classes to the div
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const messages = document.querySelector('.messages');
    messages.appendChild(div);

    setTimeout(() => {
        document.querySelector('.messages div').remove();
    }, 3000);

  }

  //Display displayResult
  displayResult(result, currency) {
    console.log(currency);
    let cur = 'price_'+currency.toLowerCase();
    console.log(result[cur]);

    let HTMLTemplate = `
      <div class="card cyan darken-3">
        <div class="card-content white-text">
          <span class="card-title">Result</span>
          <p>The price of ${result.name} in ${currency} ${result[cur]}</p>
          <p>Last Hour: ${result.percent_change_1h}%</p>
          <p>Last Day: ${result.percent_change_24h}%</p>
          <p>Last 7 Days: ${result.percent_change_7d}%</p>
        </div>
      </div
    `;
    this.showSpinner();

    setTimeout(() => {
      const divR = document.querySelector('#result');
      divR.innerHTML = HTMLTemplate;

      document.querySelector('.spinner img').remove();
    }, 2000)

  }

  showSpinner(){
    const spin = document.createElement('img');
    spin.src = 'img/spinner.gif';
    document.querySelector('.spinner').appendChild(spin);
  }
}
