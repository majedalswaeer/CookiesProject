'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    shopName: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randCust: [],
    avgCookiesPerH: [],
    total: 0,
    calcRandCustPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCust.push(randCust);
        }
    },
    calAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookies);
            this.total = this.total + this.avgCookiesPerH[i];
        }
    },
    render: function () {
        let divContainer = document.getElementById('container');
        let h2El = document.createElement('h2');
        h2El.appendChild(divContainer);
        h2El.textContent = this.shopName;

        let ulEl = document.createElement('ul');
        divContainer.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
            liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let totalEl = document.createElement('li');
        totalEl.textContent = 'Total ' + this.total + ' cookies';
        ulEl.appendChild(totalEl);
    }
}
console.log(seattle);
seattle.calcRandCustPerH();
seattle.calAvgCookiesPerH();
seattle.render();