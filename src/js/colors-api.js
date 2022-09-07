
export default class RandomColor {
  static getRandomColor() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = 'https://x-colors.herokuapp.com/api/random';
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