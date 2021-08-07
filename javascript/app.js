let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let one = {
  location : "seattle" ,
   minCostumer : 23 ,
   maxCostumer : 65 ,
   avg : 6.3 ,
   arr : [] ,
   total: 0,
   avgcookes: [],
   
   custperh: function() {
     for (let i = 0 ;i<hours.length;i++){
      
         let min = Math.ceil(this.minCostumer);
         let max = Math.floor(this.maxCostumer);
         let arrnew = Math.floor(Math.random() * (max - min + 1) + min);
         this.arr.push(arrnew);
   
     }
     },
 getarr: function (){
 for (let i=0;i<hours.length;i++){
  this.avgcookes[i] =Math.ceil(this.arr[i] * this.avg);
  this.total = this.total + this.avgcookes[i];
 }
   },
 
  render: function() {
     let divContainer = document.getElementById('container');
     let h2El = document.createElement('h2');
     divContainer.appendChild(h2El);
     h2El.textContent = this.location;
     let ulEl = document.createElement('ul');
     divContainer.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       let liEl = document.createElement('li');
       // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
       liEl.textContent = `${hours[i]} ${this.arr[i]} cookies`;
       ulEl.appendChild(liEl);
     }
     let totalEl = document.createElement('li');
     totalEl.textContent = 'Total ' + this.total + ' cookies';
     ulEl.appendChild(totalEl);
   } 
 
 
 };
 
 
 
 one.custperh();
 one.getarr();
 console.log(one);
 one.render();


let two = {
  location : "tokyo" ,
   minCostumer : 3 ,
   maxCostumer : 24 ,
   avg : 1.2 ,
   arr : [] ,
   total: 0,
   avgcookes: [],
   
   custperh: function() {
     for (let i = 0 ;i<hours.length;i++){
      
         let min = Math.ceil(this.minCostumer);
         let max = Math.floor(this.maxCostumer);
         let arrnew = Math.floor(Math.random() * (max - min + 1) + min);
         this.arr.push(arrnew);
   
     }
     },
 getarr: function (){
 for (let i=0;i<hours.length;i++){
  this.avgcookes[i] =Math.ceil(this.arr[i] * this.avg);
  this.total = this.total + this.avgcookes[i];
 }
   },
 
  render: function() {
     let divContainer = document.getElementById('container');
     let h2El = document.createElement('h2');
     divContainer.appendChild(h2El);
     h2El.textContent = this.location;
     let ulEl = document.createElement('ul');
     divContainer.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       let liEl = document.createElement('li');
       // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
       liEl.textContent = `${hours[i]} ${this.arr[i]} cookies`;
       ulEl.appendChild(liEl);
     }
     let totalEl = document.createElement('li');
     totalEl.textContent = 'Total ' + this.total + ' cookies';
     ulEl.appendChild(totalEl);
   } 
 
 
 };
 
 
 
 two.custperh();
 two.getarr();
 console.log(two);
 two.render();



let three = {
  location : "dubai" ,
   minCostumer : 11 ,
   maxCostumer : 38 ,
   avg : 3.7 ,
   arr : [] ,
   total: 0,
   avgcookes: [],
   
   custperh: function() {
     for (let i = 0 ;i<hours.length;i++){
      
         let min = Math.ceil(this.minCostumer);
         let max = Math.floor(this.maxCostumer);
         let arrnew = Math.floor(Math.random() * (max - min + 1) + min);
         this.arr.push(arrnew);
   
     }
     },
 getarr: function (){
 for (let i=0;i<hours.length;i++){
  this.avgcookes[i] =Math.ceil(this.arr[i] * this.avg);
  this.total = this.total + this.avgcookes[i];
 }
   },
 
  render: function() {
     let divContainer = document.getElementById('container');
     let h2El = document.createElement('h2');
     divContainer.appendChild(h2El);
     h2El.textContent = this.location;
     let ulEl = document.createElement('ul');
     divContainer.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       let liEl = document.createElement('li');
       // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
       liEl.textContent = `${hours[i]} ${this.arr[i]} cookies`;
       ulEl.appendChild(liEl);
     }
     let totalEl = document.createElement('li');
     totalEl.textContent = 'Total ' + this.total + ' cookies';
     ulEl.appendChild(totalEl);
   } 
 
 
 };
 
 
 
 three.custperh();
three.getarr();
 console.log(three);
 three.render();

 let four = {
  location : "paris" ,
   minCostumer : 20 ,
   maxCostumer : 38 ,
   avg : 2.3 ,
   arr : [] ,
   total: 0,
   avgcookes: [],
   
   custperh: function() {
     for (let i = 0 ;i<hours.length;i++){
      
         let min = Math.ceil(this.minCostumer);
         let max = Math.floor(this.maxCostumer);
         let arrnew = Math.floor(Math.random() * (max - min + 1) + min);
         this.arr.push(arrnew);
   
     }
     },
 getarr: function (){
 for (let i=0;i<hours.length;i++){
  this.avgcookes[i] =Math.ceil(this.arr[i] * this.avg);
  this.total = this.total + this.avgcookes[i];
 }
   },
 
  render: function() {
     let divContainer = document.getElementById('container');
     let h2El = document.createElement('h2');
     divContainer.appendChild(h2El);
     h2El.textContent = this.location;
     let ulEl = document.createElement('ul');
     divContainer.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       let liEl = document.createElement('li');
       // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
       liEl.textContent = `${hours[i]} ${this.arr[i]} cookies`;
       ulEl.appendChild(liEl);
     }
     let totalEl = document.createElement('li');
     totalEl.textContent = 'Total ' + this.total + ' cookies';
     ulEl.appendChild(totalEl);
   } 
 
 
 };
 
 
 
 four.custperh();
 four.getarr();
 console.log(four);
 four.render();


 let five = {
  location : "lima" ,
   minCostumer : 2 ,
   maxCostumer : 16 ,
   avg : 4.6 ,
   arr : [] ,
   total: 0,
   avgcookes: [],
   
   custperh: function() {
     for (let i = 0 ;i<hours.length;i++){
      
         let min = Math.ceil(this.minCostumer);
         let max = Math.floor(this.maxCostumer);
         let arrnew = Math.floor(Math.random() * (max - min + 1) + min);
         this.arr.push(arrnew);
   
     }
     },
 getarr: function (){
 for (let i=0;i<hours.length;i++){
  this.avgcookes[i] =Math.ceil(this.arr[i] * this.avg);
  this.total = this.total + this.avgcookes[i];
 }
   },
 
  render: function() {
     let divContainer = document.getElementById('container');
     let h2El = document.createElement('h2');
     divContainer.appendChild(h2El);
     h2El.textContent = this.location;
     let ulEl = document.createElement('ul');
     divContainer.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       let liEl = document.createElement('li');
       // liEl.textContent = hours[i] + ' ' + this.avgCookiesPerH[i] + ' cookies';
       liEl.textContent = `${hours[i]} ${this.arr[i]} cookies`;
       ulEl.appendChild(liEl);
     }
     let totalEl = document.createElement('li');
     totalEl.textContent = 'Total ' + this.total + ' cookies';
     ulEl.appendChild(totalEl);
   } 
 
 
 };
 
 
 
 five.custperh();
 five.getarr();
 console.log(five);
 five.render();

