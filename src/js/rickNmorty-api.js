export default class AllCharacters {
  static getAllCharacters() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = 'https://rickandmortyapi.com/api/character/1,8,15,19,22,48,56,69,72,74,78,82,86,103,119,135,164,165,187,215,218,220,231,265,267,274,278,281,283,284,285,286,287,288,289,290,291,292,293,294,299,322,328,330,345,349,353,361,378,380,381,385,389,434,461,462,463,464,465,466,472,477,478,479,481,482,483,484,485,486,487,488,489,497,498,501,503,504,507,508,516,517,631,638,687,694,698,701,702,707,713,760,769,770,772,773,779,781,783,784,810,814,815,816,817,818,819';
      request.addEventListener('loadend', function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
