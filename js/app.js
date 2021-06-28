'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//____________________________________________________________________________________
// let avgCookiesPerH = [];
let shopss = [];
function Shops(shopName, minCust, maxCust, avgCookies) {
    this.shopName = shopName;
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.randCust = [];
    this.avgCookiesPerH = [];
    this.avgCookies = avgCookies;
    this.total = 0;
    shopss.push(this);

}
//____________________________________________________________________________________
Shops.prototype.calcRandCustPerH = function (min, max) {
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let randCustt = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randCustt);
        this.randCust.push(randCustt);
    }

}
//____________________________________________________________________________________
Shops.prototype.calAvgCookiesPerH = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookies);
        this.total = this.total + this.avgCookiesPerH[i];
        console.log(this.total);
    }
}

//____________________________________________________________________________________GLOBAL VALUES
let contone = document.getElementById('container');
let tableEL = document.createElement('table');
contone.appendChild(tableEL);
//____________________________________________________________________________________CREATING HEADERS
function creaTableHeader() {

    let thEL1 = document.createElement('th');
    tableEL.appendChild(thEL1);
    thEL1.textContent = 'shopName';

    for(let i=0 ; i < hours.length ; i++){

    let thEL2 = document.createElement('th');
    tableEL.appendChild(thEL2);
    thEL2.textContent = hours[i];

    
}


let thEL3 = document.createElement('th');
    tableEL.appendChild(thEL3);
    thEL3.textContent = 'Daily Location Total';
}
//____________________________________________________________________________________END OF HEADER FUNCTION

//____________________________________________________________________________________CONTENT FUNCTION

// function creatContent (){


// }









//____________________________________________________________________________________FOOTERFUNCTION
function createFooter(){
    let footerEL=document.createElement('tr');
    footerEL.textContent=`Totals`
    tableEL.appendChild(footerEL);
    for(let i=0 ; i<shopss.length ; i++)
    let tdELft = document.createElement('td')
    let totall = 0;
    for(let  j=0 ; j < shopss.length ; i++){
        totall+=shopss[j].avgCookiesPerH[i]




    }



footerEL.appendChild(tdELft);
}  
Shops.prototype.render = function () {
    let divContainer = document.getElementById('container');
    let tdEl = document.createElement('td');
    divContainer.appendChild(h2El);
    h2El.textContent = this.shopName;

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


// for(let i=0 ; i < hours.length ; i++){

//     let trEL = document.createElement('td');
//     tthEL3.appendChild(trEL);
//     trEL.textContent = hours[i];
// }
//____________________________________________________________________________________

// for(let i=0 ; i < shopss.length ; i++){
//     let trEL = document.createElement('tr');
//     tableEL.appendChild(trEL);
//     let td1=document.createElement('td');
//     td1.textContent=shopss[i].nameshopName;
//     let td2=document.createElement('td');
//     td2.textContent=shopss[i].randCust;

// }

// for(let i=0 ; i < 6 ; i++){
//     let row = document.createElement("tr");
//     for(let j=0 ; j<6 ; j++){
//        let cell = document.createElement("td");
//        let cellText = document.createTextNode("cell in row ");
//        cell.appendChild(cellText);
//        row.appendChild(cell);
//     }



// }
// let thEL1 = document.createElement('th');
// thEL1.textContent = hours;
// trEL.appendChild(thEL1);
// let thEL2 = document.createElement('th');
// thEL2.textContent = 'shopName';
// trEL.appendChild(thEL2);


// }
//____________________________________________________________________________________
creaTableHeader();
createFooter();
let seattleShop = new Shops('Seattle Shop', 23, 65, 6.3);
seattleShop.calcRandCustPerH();
seattleShop.calAvgCookiesPerH();

let TokyoShop = new Shops('Tokyo Shop', 3, 24, 1.2);
TokyoShop.calcRandCustPerH();
TokyoShop.calAvgCookiesPerH();

let DubaiShop = new Shops('Dubai Shop', 11, 38, 3.7);
DubaiShop.calcRandCustPerH();
DubaiShop.calAvgCookiesPerH();

let ParisShop = new Shops('Paris Shop', 20, 38, 2.3);
ParisShop.calcRandCustPerH();
ParisShop.calAvgCookiesPerH();

let LimaShop = new Shops('Lima Shop', 2, 16, 4.6);
LimaShop.calcRandCustPerH();
LimaShop.calAvgCookiesPerH();









// let seattle = {
//     shopName: 'seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     randCust: [],
//     avgCookiesPerH: [],
//     total: 0,
//     calcRandCustPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let min = Math.ceil(this.minCust);
//             let max = Math.floor(this.maxCust);
//             let randCust = Math.floor(Math.random() * (max - min + 1) + min);
//             this.randCust.push(randCust);
//         }
//     },
//     calAvgCookiesPerH: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookies);
//             this.total = this.total + this.avgCookiesPerH[i];
//         }
//     },
//     render: function () {
//         let divContainer = document.getElementById('container');
//         let h2El = document.createElement('h2');
//         h2El.appendChild(divContainer);
//         h2El.textContent = this.shopName;

//         let ulEl = document.createElement('ul');
//         divContainer.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
//             liEl.textContent = `${hours[i]} ${this.avgCookiesPerH[i]} cookies`;
//             ulEl.appendChild(liEl);
//         }
//         let totalEl = document.createElement('li');
//         totalEl.textContent = 'Total ' + this.total + ' cookies';
//         ulEl.appendChild(totalEl);
//     }
// }
// console.log(seattle);
// seattle.calcRandCustPerH();
// seattle.calAvgCookiesPerH();
// seattle.render();

