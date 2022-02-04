import '../css/style.css'

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


const divContainer = document.querySelector(".container");
const button = document.querySelector(".buttonStyle");

const createNewContainer = () => {
  console.log("click");
  const currencyContainer = createHTMLCurrencyContainer();
  divContainer.appendChild(currencyContainer);
};

const createHTMLCurrencyContainer = () => {
  const divNewCurrencyContainer = document.createElement("div");
  divNewCurrencyContainer.className = "coinType";

  const divButton = document.createElement("button");
  divButton.className = "buttonStyle";
  divButton.textContent = "clear";
  const handleClick = () => deleteDivFromDom(divNewCurrencyContainer);
  divButton.onclick = handleClick; 
  divNewCurrencyContainer.appendChild(divButton);

  return divNewCurrencyContainer;
};

const deleteDivFromDom = (element) => {
  console.log(element);
  element.remove();
};
button.addEventListener("click", createNewContainer);














