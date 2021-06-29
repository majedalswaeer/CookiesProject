'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let avgCookiesPerH = [];
let seattle = {
    shopName: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randCustt: [],
    total: 0,
    calcRandCustPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCustt.push(randCust);
        };
    },
    calAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            avgCookiesPerH[i] = Math.ceil(this.randCustt[i] * this.avgCookies);
            this.total = this.total + avgCookiesPerH[i];
        };
    },
    render: function () {
        let divContainer = document.getElementById('container');
        let h2El = document.createElement('h2');
        h2El.textContent = this.shopName;
        divContainer.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divContainer.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${avgCookiesPerH[i]} cookies`;
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
//____________________________________________________________________________________________________________tokyo

let tokyo = {
    shopName: 'tokyo',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randCustt: [],
    total: 0,
    calcRandCustPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCustt.push(randCust);
        };
    },
    calAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            avgCookiesPerH[i] = Math.ceil(this.randCustt[i] * this.avgCookies);
            this.total = this.total + avgCookiesPerH[i];
        };
    },
    render: function () {
        let divContainer = document.getElementById('container');
        let h2El = document.createElement('h2');
        h2El.textContent = this.shopName;
        divContainer.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divContainer.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${avgCookiesPerH[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let totalEl = document.createElement('li');
        totalEl.textContent = 'Total ' + this.total + ' cookies';
        ulEl.appendChild(totalEl);
    }
}
console.log(tokyo);
tokyo.calcRandCustPerH();
tokyo.calAvgCookiesPerH();
tokyo.render();
//____________________________________________________________________________________________________________paris
let paris = {
    shopName: 'paris',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randCustt: [],
    total: 0,
    calcRandCustPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCustt.push(randCust);
        };
    },
    calAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            avgCookiesPerH[i] = Math.ceil(this.randCustt[i] * this.avgCookies);
            this.total = this.total + avgCookiesPerH[i];
        };
    },
    render: function () {
        let divContainer = document.getElementById('container');
        let h2El = document.createElement('h2');
        h2El.textContent = this.shopName;
        divContainer.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divContainer.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${avgCookiesPerH[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let totalEl = document.createElement('li');
        totalEl.textContent = 'Total ' + this.total + ' cookies';
        ulEl.appendChild(totalEl);
    }
}
console.log(paris);
paris.calcRandCustPerH();
paris.calAvgCookiesPerH();
paris.render();
//____________________________________________________________________________________________________________dubai
let dubai = {
    shopName: 'dubai',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randCustt: [],
    total: 0,
    calcRandCustPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCustt.push(randCust);
        };
    },
    calAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            avgCookiesPerH[i] = Math.ceil(this.randCustt[i] * this.avgCookies);
            this.total = this.total + avgCookiesPerH[i];
        };
    },
    render: function () {
        let divContainer = document.getElementById('container');
        let h2El = document.createElement('h2');
        h2El.textContent = this.shopName;
        divContainer.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divContainer.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${avgCookiesPerH[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let totalEl = document.createElement('li');
        totalEl.textContent = 'Total ' + this.total + ' cookies';
        ulEl.appendChild(totalEl);
    }
}
console.log(dubai);
dubai.calcRandCustPerH();
dubai.calAvgCookiesPerH();
dubai.render();
//____________________________________________________________________________________________________________lima
let lima = {
    shopName: 'lima',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    randCustt: [],
    total: 0,
    calcRandCustPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            let min = Math.ceil(this.minCust);
            let max = Math.floor(this.maxCust);
            let randCust = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCustt.push(randCust);
        };
    },
    calAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            avgCookiesPerH[i] = Math.ceil(this.randCustt[i] * this.avgCookies);
            this.total = this.total + avgCookiesPerH[i];
        };
    },
    render: function () {
        let divContainer = document.getElementById('container');
        let h2El = document.createElement('h2');
        h2El.textContent = this.shopName;
        divContainer.appendChild(h2El);

        let ulEl = document.createElement('ul');
        divContainer.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${avgCookiesPerH[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        let totalEl = document.createElement('li');
        totalEl.textContent = 'Total ' + this.total + ' cookies';
        ulEl.appendChild(totalEl);
    }
}
console.log(lima);
lima.calcRandCustPerH();
lima.calAvgCookiesPerH();
lima.render();
