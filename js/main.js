import '../css/style.css'



const URL = "https://api.coingecko.com/api/v3/coins/bitcoin/";

const callApi = async () => {
  const data= await fetch(URL);
  const dataParsed = await data.json();
  console.log(dataParsed.market_data.current_price.eur);
  return dataParsed;
};
callApi()

const divBitcoin = document.querySelector(".bitcoin");
console.log(divBitcoin)


const getPriceAndShowInDom = async () => {
  const bitcoinPrice = await callApi();
  const divBitcoinPrice = document.createElement("p");
  console.log(bitcoinPrice);
  divBitcoinPrice.textContent = `current price: ${bitcoinPrice.market_data.current_price.eur} €  ath price: ${ bitcoinPrice.market_data.ath.eur} € ranking:  ${ bitcoinPrice.market_data.market_cap_rank}`;
  divBitcoin.appendChild(divBitcoinPrice);
};
getPriceAndShowInDom();







/*  

const callApi = () => fetch("https://api.coingecko.com/api/v3/coins/bitcoin")

callApi()
.then(function(data){
  return data.json()
})
.then(function(data){
  console.log(data.market_data.current_price.eur)
  return data.market_data.current_price.eur
})
.catch(function(err){
  return err
});





const callApi = () => fetch("https://api.coingecko.com/api/v3/coins/bitcoin");

const callApiAgain = () => {
  const result = callApi()
.then(function(data){
  return data.json()
})
  console.log(result)
  return result
}

callApiAgain()  
.then(function(data){ console.log(data.market_data.current_price.eur)
  return data
})
.catch(function(err){
  return err
});
*/