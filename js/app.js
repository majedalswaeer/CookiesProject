'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//____________________________________________________________________________________
// let avgCookiesPerH = [];
let shopss = [];
function Shops(shopName, minCust, maxCust, avgCookies) {
    this.shopName = shopName;
    this.maxCust = maxCust;
    this.minCust = minCust;
    this.avgCookies = avgCookies;
    this.randCust = [];
    this.avgCookiesPerH = [];
    this.total = 0;
    shopss.push(this);

}
//____________________________________________________________________________________
Shops.prototype.calcRandCustPerH = function (min, max) {
    for (let i = 0; i < hours.length; i++) {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        let randCustt = Math.floor(Math.random() * (max - min + 1) + min);
        this.randCust.push(randCustt);
    }

}
//____________________________________________________________________________________
Shops.prototype.calAvgCookiesPerH = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookies);
        this.total = this.total + this.avgCookiesPerH[i];
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
    thEL1.textContent = 'ShopName';

    for (let i = 0; i < hours.length; i++) {

        let thEL2 = document.createElement('th');
        tableEL.appendChild(thEL2);
        thEL2.textContent = hours[i];


    }
    let thEL3 = document.createElement('th');
    tableEL.appendChild(thEL3);
    thEL3.textContent = 'Daily Location Total';
}
creaTableHeader();
//____________________________________________________________________________________END OF HEADER FUNCTION
//____________________________________________________________________________________CONTENT FUNCTION
Shops.prototype.render = function () {
    let trCont = document.createElement('tr');
    let h2cont = document.createElement('h2')
    h2cont.textContent = this.shopName;
    let totalll = 0;
    trCont.appendChild(h2cont);
    for (let i = 0; i < this.avgCookiesPerH.length; i++) {
        let tdCont = document.createElement('td');
        totalll += this.avgCookiesPerH[i];
        tdCont.textContent = ` ${this.avgCookiesPerH[i]}`;
        trCont.appendChild(tdCont);
    }
    let tdCont = document.createElement('td');
    tdCont.textContent = this.total;
    trCont.appendChild(tdCont);
    tableEL.appendChild(trCont);




}
//____________________________________________________________________________________END CONTENT FUNCTION

//____________________________________________________________________________________FOOTERFUNCTION
function createFooter() {
    let footerEL = document.createElement('tfoot');
    let tdEL = document.createElement('td');

    tdEL.textContent='Totals'

    footerEL.appendChild(tdEL);
    tableEL.appendChild(footerEL)

    let maintotal = 0

    for(let i=0 ; i <hours.length ; i++){
        let summ = 0;
        let tdel = document.createElement('td');
        for(let j = 0 ; j < shopss.length ; j++){
            summ = summ + shopss[j].avgCookiesPerH[i]
            
            console.log(summ);
        }
        maintotal+=summ;
        tdel.textContent = summ ;
        footerEL.appendChild(tdel);
    }
    let totaltd = document.createElement('td')
    totaltd.textContent = maintotal;
    footerEL.appendChild(totaltd)

}


//____________________________________________________________________________________


let seattleShop = new Shops('Seattle Shop', 23, 65, 6.3);
seattleShop.calcRandCustPerH();
seattleShop.calAvgCookiesPerH();
seattleShop.render();

let TokyoShop = new Shops('Tokyo Shop', 3, 24, 1.2);
TokyoShop.calcRandCustPerH();
TokyoShop.calAvgCookiesPerH();
TokyoShop.render();


let DubaiShop = new Shops('Dubai Shop', 11, 38, 3.7);
DubaiShop.calcRandCustPerH();
DubaiShop.calAvgCookiesPerH();
DubaiShop.render();

let ParisShop = new Shops('Paris Shop', 20, 38, 2.3);
ParisShop.calcRandCustPerH();
ParisShop.calAvgCookiesPerH();
ParisShop.render();

let LimaShop = new Shops('Lima Shop', 2, 16, 4.6);
LimaShop.calcRandCustPerH();
LimaShop.calAvgCookiesPerH();
LimaShop.render();

createFooter();

//____________________________________________________________________________________


let myform = document.getElementById('majedForm');
myform.addEventListener('submit',eventfunc);

function eventfunc(event) {
    event.preventDefault();

    let shopName = event.target.shopName.value
    let minCust = event.target.minCust.value
    let maxCust = event.target.maxCust.value
    let avgCookies = event.target.avgCookies.value

    let newshop = new Shops(shopName, minCust, maxCust, avgCookies);

    newshop.calcRandCustPerH();
    newshop.calAvgCookiesPerH();
    newshop.render();
    tableEL.deleteTFoot();
    createFooter();

}
