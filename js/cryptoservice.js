const fetch = (input) =>
window
.fetch(input, {
  method: "GET",
})
.then((res) => res.json());

const BASE_URL = "https://api.coingecko.com/api/v3/";

export const CryptoService = {
  getData: function () {
    return fetch(`${BASE_URL}coins/list`);
  },
  getCoin: (id) =>{
    return fetch(`${BASE_URL}coins/$(id)`);
  },
};
