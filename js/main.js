import './style.css'
import './cryptoservice'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
const llamandoApi = () => fetch("https://api.coingecko.com/api/v3/coins/bitcoin")

llamandoApi()
.then(function(data){
  return data.json()
})
.then(function(data){
  console.log(data.market_data.current_price.eur)
  return data
})
.catch(function(err){
  return err
});


/*const callApi = () => fetch("https://api.coingecko.com/api/v3/coins/bitcoin");

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