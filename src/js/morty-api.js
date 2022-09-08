export default class AllMortys {
  static getAllMortys() {
    return fetch('https://rickandmortyapi.com/api/character/2,14,18,21,27,42,43,44,53,61,73,77,83,84,85,95,113,118,123,143,152,200,206,209,217,229,230,231,232,233,234,235,298,325,359,360,366,392,401,473,474,475,476,480,499,505,512,518,630,636,637,659,660,661,685,690,696,699,706,715,759,801,802,803,805,811,812,820,').then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    })
  }
}