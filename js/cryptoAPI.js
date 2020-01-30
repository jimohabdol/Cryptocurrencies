class CryptoAPI {

  //Get all thr cryptocurrency
  async getCryptocurrency (){
    const url = await fetch ('https://api.coinmarketcap.com/v1/ticker/');

    //Convert url values to JSON
    const cryptocurrency = await url.json();

    //return JSON values as object
    return {cryptocurrency}
  }

  //Query the rest api with trhe value of currency and cryptocurrency
  async queryAPI(currency, cryptocurrency){
    const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

    //covert result to JSSON
    const result = await url.json();

    return {result}
  }

}
