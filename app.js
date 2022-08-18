const fiverr = document.getElementById('fiverr');
const counter = document.getElementById('counter');

fiverr.onsubmit = (e)=>{
e.preventDefault()
const formdata= new FormData(e.target)
const alldata= Object.fromEntries(formdata.entries());
const {date,time}= Object.fromEntries(formdata.entries());



let startdate = Date.now();

let count = setInterval(()=>{

let enddate = new Date(date +' '+ time);
let ordertime = Math.floor(Math.abs(enddate.getTime() - startdate));


let sec = Math.floor(ordertime/1000);
let min = Math.floor(sec/60);
let hour = Math.floor(min/60);
let day = Math.floor(hour/24);

if(sec == 0)
{
    clearInterval(count);
   
}

let totalhour =hour - (day * 24);
let totalmin =min - (day * 24 * 60) - (hour * 60);
let totalsec =sec - (day* 24 * 60 *60) - (hour * 60 *60) - (min * 60);
counter.innerHTML = `<h4>${day} days : ${totalhour} hour : ${totalmin} minute: ${totalsec} second</h4>`
},1000)




}
