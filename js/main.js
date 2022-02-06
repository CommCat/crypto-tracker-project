import '../css/style.css'
import { CryptoService } from './cryptoservice';



const divContainer = document.querySelector(".container");
const button = document.querySelector("#search");
const input = document.querySelector("#currencyName");
const ArrayCurrency = [];
let counter = 0;

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=ath%2C%20current_price%2C%20market_cap_rank&per_page=100&page=1&sparkline=false";

const callApi = async () => {
  const data = await fetch(URL);
  const dataParsed = await data.json();
 // console.log(dataParsed[0].current_price);
  return dataParsed;
};

callApi()

const divBitcoin = document.querySelector(".bitcoin");

const getBitcoinAndShowInDom = async () => {
  const bitcoinPrice = await callApi();
  const divBitcoinPrice = document.createElement("p");
  
  divBitcoinPrice.textContent = `current price: ${bitcoinPrice[0].current_price}€  ath price: ${ bitcoinPrice[0].ath}€ ranking:  ${ bitcoinPrice[0].market_cap_rank}`;

  divBitcoin.appendChild(divBitcoinPrice);
};
getBitcoinAndShowInDom();


const divEthereum = document.querySelector(".ethereum");

const getEthereumAndShowInDom = async () => {
  const ethereumPrice = await callApi();
  const divEthereumPrice = document.createElement("p");
  
  divEthereumPrice.textContent = `current price: ${ethereumPrice[1].current_price}€  ath price: ${ ethereumPrice[1].ath}€ ranking:  ${ ethereumPrice[1].market_cap_rank}`;

  divEthereum.appendChild(divEthereumPrice);
};
getEthereumAndShowInDom();

const BASE_URL = "https://api.coingecko.com/api/v3/coins/"

const getCoins = async () => {    
  const data = await fetch(`${BASE_URL}`);
  const dataParsed = await data.json();
  return dataParsed;
};
getCoins()

button.addEventListener("click", async () => {
  
  let found = false;
  const newCurrencyData = await getCoins();
  console.log(newCurrencyData.entries())
  for (let i = 0; i < newCurrencyData.length; i++) {
    let name = newCurrencyData[i].id;
    let currency = input.value;
    console.log(newCurrencyData[i]);
    if(name == currency){ 
      alert("The currency is on the website")   
      return name;             
    }         
     found = true; 
    }   
    if (found === false){
    alert("Currency not found. Try again.");
    }

  });
  
 

function createNewContainer() {
  console.log("click");
  
  const currencyContainer = createHTMLCurrencyContainer();
  divContainer.appendChild(currencyContainer);


}

const createHTMLCurrencyContainer = () => {
  const divNewCurrencyContainer = document.createElement("div");
  divNewCurrencyContainer.className = "coinType";
  
  
//delete div button
  const divButton = document.createElement("button");
  divButton.className = "buttonStyle";
  divButton.textContent = "clear";
  const handleClick = () => deleteDivFromDom(divNewCurrencyContainer);
  divButton.onclick = handleClick; 
  divNewCurrencyContainer.appendChild(divButton);  

  const moreInfo = document.createElement("p");
  moreInfo.className = "light";
  moreInfo.textContent = `For more information about this cryptocurrency go to https://www.coingecko.com/.`;
  divNewCurrencyContainer.appendChild(moreInfo)

  return divNewCurrencyContainer;
};

const deleteDivFromDom = (element) => {
  console.log(element);
  element.remove();
};

button.addEventListener("click", createNewContainer);


















